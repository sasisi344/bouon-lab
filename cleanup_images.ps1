$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$removedCount = 0

foreach ($mdxFile in $mdxFiles) {
    $dir = $mdxFile.Directory.FullName
    $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
    
    # Extract image path if it exists
    if ($content -match '(?mi)^image:\s*(.*)$') {
        $imgPath = $Matches[1].Trim()
        
        # If it's a relative path (starts with ./)
        if ($imgPath.StartsWith("./")) {
            $fileName = $imgPath.Substring(2)
            $fullPath = Join-Path $dir $fileName
            
            if (-not (Test-Path $fullPath)) {
                # Image file does not exist, remove the line
                $newContent = $content -replace "(?mi)^image:.*`r?`n", ""
                [System.IO.File]::WriteAllText($mdxFile.FullName, $newContent, [System.Text.Encoding]::UTF8)
                $removedCount++
                # Write-Host "Removed non-existent image reference from: $($mdxFile.FullName)"
            }
        }
    }
}
Write-Host "Removed references: $removedCount"
