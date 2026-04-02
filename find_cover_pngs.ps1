$mdxFiles = Get-ChildItem -Path "src/content" -Recurse -Filter "*.mdx"
foreach ($mdxFile in $mdxFiles) {
    if ((Get-Content $mdxFile.FullName -Raw) -match '(?mi)^image:\s*\.?/cover\.png') {
        Write-Host $mdxFile.FullName
    }
}
