$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
$checkedCount = 0
$withImageCount = 0

foreach ($mdxFile in $mdxFiles) {
    $checkedCount++
    $content = [System.IO.File]::ReadAllText($mdxFile.FullName)
    if ($content -match '(?mi)^image:\s*(.*)$') {
        $withImageCount++
        $imgPath = $Matches[1].Trim().Replace('"', '').Replace("'", "")
        if ($imgPath.StartsWith("./")) {
            $fileName = $imgPath.Substring(2)
            $fullPath = Join-Path $mdxFile.Directory.FullName $fileName
            if (-not (Test-Path $fullPath)) {
                Write-Host "BROKEN: $($mdxFile.FullName) -> $imgPath (Not Found at $fullPath)"
            }
        }
    }
}
Write-Host "Checked $checkedCount files, $withImageCount with image field."
