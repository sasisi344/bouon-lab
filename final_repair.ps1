$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$fixedCount = 0
$removedCount = 0

foreach ($mdxFile in $mdxFiles) {
    $dir = $mdxFile.Directory.FullName
    $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
    
    # Check if image field exists
    if ($content -match '(?mi)^image:\s*(.*)$') {
        $imgPath = $Matches[1].Trim().Replace('"', '').Replace("'", "")
        
        # If it's a relative path
        if ($imgPath.StartsWith("./")) {
            $fileName = $imgPath.Substring(2)
            $fullPath = Join-Path $dir $fileName
            
            if (-not (Test-Path $fullPath)) {
                # File specifically mentioned doesn't exist. Find an alternative.
                $alt = Get-ChildItem -Path $dir -Include "cover.jpg","cover.png","cover.webp","cover.jpeg" | Select-Object -First 1
                
                if ($alt) {
                    $newPath = "./$($alt.Name)"
                    $newContent = $content -replace "(?mi)^image:.*$", "image: $newPath"
                    [System.IO.File]::WriteAllText($mdxFile.FullName, $newContent, [System.Text.Encoding]::UTF8)
                    $fixedCount++
                    Write-Host "REPAIRED: $($mdxFile.FullName) (Changed to $newPath)"
                } else {
                    # No cover image found at all, remove the field
                    $newContent = $content -replace "(?mi)^image:.*`r?`n", ""
                    [System.IO.File]::WriteAllText($mdxFile.FullName, $newContent, [System.Text.Encoding]::UTF8)
                    $removedCount++
                    Write-Host "REMOVED: $($mdxFile.FullName) (No image found)"
                }
            }
        }
    }
}
Write-Host "Repaired: $fixedCount, Removed: $removedCount"
