$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$brokenCount = 0

foreach ($mdxFile in $mdxFiles) {
    $dir = $mdxFile.Directory.FullName
    $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
    
    # Extract image path if it exists
    if ($content -match '(?mi)^image:\s*(.*)$') {
        $imgPath = $Matches[1].Trim()
        
        # If it's a relative path (starts with ./)
        if ($imgPath.StartsWith("./")) {
            $fileName = $imgPath.Substring(2).Replace('"', '').Replace("'", "")
            $fullPath = Join-Path $dir $fileName
            
            if (-not (Test-Path $fullPath)) {
                $brokenCount++
                Write-Host "BROKEN: $($mdxFile.FullName) points to $fileName (NOT FOUND)"
            }
        }
    }
}
Write-Host "Total broken: $brokenCount"
