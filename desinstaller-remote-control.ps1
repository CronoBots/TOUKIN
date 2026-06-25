# desinstaller-remote-control.ps1
# Retire le demarrage automatique (tache planifiee + ancien .vbs eventuel)
# ET arrete la session Remote Control en cours -- UNIQUEMENT pour CE projet.
# La suppression de la tache demande une elevation (UAC) : le script se
# re-eleve tout seul si besoin.
# Usage :  powershell -ExecutionPolicy Bypass -File .\desinstaller-remote-control.ps1

$ErrorActionPreference = "SilentlyContinue"

$taskName = "TOUKIN Remote Control"

# --- Se re-elever si besoin (suppression de tache = admin) ---
$isAdmin = ([Security.Principal.WindowsPrincipal] `
    [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltinRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "[i] Elevation requise pour supprimer la tache planifiee (UAC)..." -ForegroundColor Yellow
    Start-Process powershell.exe -Verb RunAs -Wait -ArgumentList `
        '-NoProfile','-ExecutionPolicy','Bypass','-File',"`"$PSCommandPath`""
    exit
}

# 1. Supprimer la tache planifiee
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Host "[OK] Tache planifiee '$taskName' supprimee." -ForegroundColor Green
} else {
    Write-Host "[i] Aucune tache planifiee '$taskName'." -ForegroundColor DarkGray
}

# 2. Supprimer un eventuel ancien lanceur .vbs (methode obsolete)
$startupDir = [Environment]::GetFolderPath('Startup')
$oldVbs = Join-Path $startupDir "claude-remote-control-toukin.vbs"
if (Test-Path $oldVbs) {
    Remove-Item $oldVbs -Force
    Write-Host "[OK] Ancien lanceur .vbs supprime." -ForegroundColor Green
}

# 3. Arreter les process en cours -- UNIQUEMENT ceux de CE projet.
#    Identifiant : le mot "Toukin" dans la ligne de commande (nom de
#    session ET nom de dossier, UNIQUE : les autres projets ne le contient pas).
$pidFile = Join-Path $PSScriptRoot ".remote-control.pid"
if (Test-Path $pidFile) { Remove-Item $pidFile -Force }

$killed = 0
$marker = "toukin"
Get-CimInstance Win32_Process | Where-Object {
    $_.ProcessId -ne $PID -and
    $_.CommandLine -and
    $_.CommandLine.ToLower().Contains($marker)
} | ForEach-Object {
    Write-Host ("  arret PID {0} : {1}" -f $_.ProcessId, $_.CommandLine) -ForegroundColor DarkGray
    Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
    $killed++
}

Write-Host "[OK] $killed processus 'Toukin' arrete(s)." -ForegroundColor Green
Write-Host "(les autres projets n'est PAS touche.)" -ForegroundColor Cyan
