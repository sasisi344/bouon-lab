$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$fixedCount = 0
$missingCount = 0

foreach ($mdxFile in $mdxFiles) {
    $dir = $mdxFile.Directory.FullName
    
    # Check for cover images
    $cover = Get-ChildItem -Path $dir -Include "cover.jpg","cover.png","cover.webp","cover.jpeg" | Select-Object -First 1
    
    if ($cover) {
        $relativePath = "./$($cover.Name)"
        $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
        
        # Match image: (anything)
        $pattern = "(?m)^image:.*$"
        $newContent = $content -replace $pattern, "image: $relativePath"
        
        if ($content -ne $newContent) {
            [System.IO.File]::WriteAllText($mdxFile.FullName, $newContent, [System.Text.Encoding]::UTF8)
            $fixedCount++
        }
    } else {
        $missingCount++
        # Write-Host "No cover image in: $dir"
    }
}
Write-Host "Fixed: $fixedCount"
Write-Host "No cover found: $missingCount"
