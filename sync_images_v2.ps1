$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$fixedCount = 0
$missingCount = 0

foreach ($mdxFile in $mdxFiles) {
    $dir = $mdxFile.Directory.FullName
    $extensions = @(".jpg", ".png", ".webp", ".jpeg")
    $found = $null
    
    foreach ($ext in $extensions) {
        $path = Join-Path $dir ("cover" + $ext)
        if (Test-Path $path) {
            $found = "cover" + $ext
            break
        }
    }
    
    if ($found) {
        $found = "./" + $found
        $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
        
        # Regex to match image: line (case insensitive)
        $pattern = "(?mi)^image:\s*.*$"
        $newContent = $content -replace $pattern, "image: $found"
        
        if ($content -ne $newContent) {
           [System.IO.File]::WriteAllText($mdxFile.FullName, $newContent, [System.Text.Encoding]::UTF8)
           $fixedCount++
        }
    } else {
        $missingCount++
    }
}
Write-Host "Fixed: $fixedCount"
Write-Host "No cover found: $missingCount"
