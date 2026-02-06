$path = "style.css"
$c = Get-Content $path -Encoding Default
# Line 693 corresponds to index 692 (0-indexed)
$c[692] = '    content: "\2713";'
# Line 713 corresponds to index 712 (0-indexed)
$c[712] = '    content: "\2713";'
$c | Out-File $path -Encoding UTF8
