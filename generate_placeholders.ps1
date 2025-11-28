$logos = @(
    @{ Name = "un-global-compact"; Text = "UN Global Compact"; Color = "#009EDB" },
    @{ Name = "kenya-plastics-pact"; Text = "Kenya Plastics Pact"; Color = "#008000" },
    @{ Name = "waste-wise-cities"; Text = "Waste Wise Cities"; Color = "#009EDB" },
    @{ Name = "circular-economy-network"; Text = "Circular Economy Network"; Color = "#2E8B57" },
    @{ Name = "uk-circular-plastics-network"; Text = "UK Circular Plastics Network"; Color = "#000080" },
    @{ Name = "iswa"; Text = "ISWA"; Color = "#000000" },
    @{ Name = "university-east-london"; Text = "University of East London"; Color = "#000000" },
    @{ Name = "arena"; Text = "Arena"; Color = "#FF4500" }
)

foreach ($logo in $logos) {
    $svgContent = @"
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="$($logo.Color)" text-anchor="middle" dominant-baseline="middle">
    $($logo.Text)
  </text>
</svg>
"@
    $path = "public/partners/$($logo.Name).svg"
    Set-Content -Path $path -Value $svgContent
    Write-Host "Created $path"
}
