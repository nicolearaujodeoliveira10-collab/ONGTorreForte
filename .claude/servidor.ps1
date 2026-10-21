# Servidor local de desenvolvimento do site da ONG Torre Forte.
# Usa apenas o HttpListener do .NET (já incluso no Windows), sem instalar nada.
# Uso: powershell -NoProfile -ExecutionPolicy Bypass -File .claude/servidor.ps1 [-Porta 8080]
param(
  [int]$Porta = 8080,
  [string]$PastaExtra = '',
  [switch]$PermitirGravacao
)

$raiz = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$tipos = @{
  '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.svg' = 'image/svg+xml'; '.webp' = 'image/webp'; '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'; '.png' = 'image/png'; '.woff2' = 'font/woff2'; '.xml' = 'application/xml; charset=utf-8'
  '.txt' = 'text/plain; charset=utf-8'; '.ico' = 'image/x-icon'; '.webmanifest' = 'application/manifest+json'
}

function Enviar($resposta, [int]$status, [byte[]]$bytes, [string]$tipo) {
  $resposta.StatusCode = $status
  $resposta.ContentType = $tipo
  $resposta.Headers.Add('Cache-Control', 'no-store')
  $resposta.ContentLength64 = $bytes.Length
  if ($script:semCorpo) { $resposta.Close(); return }
  $resposta.OutputStream.Write($bytes, 0, $bytes.Length)
  $resposta.OutputStream.Close()
}

function Texto([string]$s) { [Text.Encoding]::UTF8.GetBytes($s) }

function Dentro([string]$caminho, [string]$base) {
  $base = $base.TrimEnd('\') + '\'
  return ($caminho + '\').StartsWith($base, [StringComparison]::OrdinalIgnoreCase)
}

$ouvinte = New-Object System.Net.HttpListener
$ouvinte.Prefixes.Add("http://localhost:$Porta/")
$ouvinte.Start()
Write-Host "Servidor em http://localhost:$Porta/ (raiz: $raiz)"

while ($ouvinte.IsListening) {
  $ctx = $ouvinte.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  $script:semCorpo = $req.HttpMethod -eq 'HEAD'
  try {
    $caminho = [Uri]::UnescapeDataString($req.Url.AbsolutePath)

    # Gravação de imagens exportadas: só com -PermitirGravacao e só dentro de assets/img.
    if ($req.HttpMethod -eq 'POST' -and $caminho -eq '/__salvar') {
      $permitida = Join-Path $raiz 'assets\img'
      $destino = [IO.Path]::GetFullPath((Join-Path $raiz ($req.QueryString['arquivo'] -replace '/', '\')))
      if (-not $PermitirGravacao -or -not (Dentro $destino $permitida)) {
        Enviar $res 403 (Texto 'Gravacao nao permitida') 'text/plain; charset=utf-8'
        continue
      }
      New-Item -ItemType Directory -Force (Split-Path $destino) | Out-Null
      $memoria = New-Object IO.MemoryStream
      $req.InputStream.CopyTo($memoria)
      [IO.File]::WriteAllBytes($destino, $memoria.ToArray())
      Enviar $res 200 (Texto "ok $($memoria.Length)") 'text/plain; charset=utf-8'
      continue
    }

    $base = $raiz
    if ($PastaExtra -and $caminho.StartsWith('/__extra/')) {
      $base = [IO.Path]::GetFullPath($PastaExtra)
      $caminho = $caminho.Substring('/__extra'.Length)
    }
    $relativo = $caminho.TrimStart('/') -replace '/', '\'
    $arquivo = if ($relativo) { [IO.Path]::GetFullPath((Join-Path $base $relativo)) } else { $base }

    if (-not (Dentro $arquivo $base)) {
      Enviar $res 403 (Texto 'Acesso negado') 'text/plain; charset=utf-8'
      continue
    }
    if (Test-Path -LiteralPath $arquivo -PathType Container) { $arquivo = Join-Path $arquivo 'index.html' }

    if (Test-Path -LiteralPath $arquivo -PathType Leaf) {
      $tipo = $tipos[[IO.Path]::GetExtension($arquivo).ToLower()]
      if (-not $tipo) { $tipo = 'application/octet-stream' }
      Enviar $res 200 ([IO.File]::ReadAllBytes($arquivo)) $tipo
    } else {
      Enviar $res 404 (Texto "Nao encontrado: $caminho") 'text/plain; charset=utf-8'
    }
  } catch {
    Write-Host "Erro: $($_.Exception.Message)"
    try { Enviar $res 500 (Texto 'Erro interno') 'text/plain; charset=utf-8' } catch {}
  }
}
