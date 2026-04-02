$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
foreach ($f in $mdxFiles) {
    if ((Get-Content $f.FullName -Raw) -match '(?mi)^image:\s*\.?/cover\.png') {
        $p = Join-Path $f.DirectoryName "cover.png"
        if (-not (Test-Path $p)) {
            Write-Host "MISSING: $p mentioned in $($f.FullName)"
        }
    }
}
