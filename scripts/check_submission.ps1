# Runs build + tests for all apps and checks Docker status
# Usage: From repository root: .\scripts\check_submission.ps1

function Run-AppChecks($path) {
  Write-Host "\n== Checking $path =="
  Push-Location $path
  npm install --legacy-peer-deps
  npm run build
  npx vitest --run --reporter dot
  Pop-Location
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $root

Run-AppChecks "context-version\naive-context"
Run-AppChecks "context-version\optimized-context"
Run-AppChecks "zustand-version"
Run-AppChecks "redux-version"

Write-Host "\n== Docker check =="
try {
  docker version > $null 2>&1
  if ($LASTEXITCODE -eq 0) {
    Write-Host "Docker CLI can talk to daemon. You can run: docker-compose up --build"
  } else {
    Write-Host "Docker CLI cannot reach daemon. Start Docker Desktop or the Docker engine and retry."
  }
} catch {
  Write-Host "Docker not found or not responding. Start Docker Desktop and retry."
}
