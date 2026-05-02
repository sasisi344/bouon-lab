$targetDir = "c:\Users\sasis\344dev\bouon-lab\src\content"
$files = Get-ChildItem -Path $targetDir -Include *.mdx, *.md -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $newContent = [regex]::Replace($content, "\*\*([^\*]+)\*\*", "<strong>`$1</strong>")
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated: $($file.FullName)"
    }
}
