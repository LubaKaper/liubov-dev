#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
output_pdf="$repo_dir/files/luba-kaper-resume.pdf"
port="${RESUME_PORT:-8765}"

if [[ -n "${CHROME_BIN:-}" ]]; then
  chrome_bin="$CHROME_BIN"
elif [[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]]; then
  chrome_bin="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif command -v google-chrome >/dev/null 2>&1; then
  chrome_bin="$(command -v google-chrome)"
elif command -v chromium >/dev/null 2>&1; then
  chrome_bin="$(command -v chromium)"
else
  echo "Chrome or Chromium is required. Set CHROME_BIN to its executable path." >&2
  exit 1
fi

python3 -m http.server "$port" --bind 127.0.0.1 --directory "$repo_dir" >/dev/null 2>&1 &
server_pid=$!
trap 'kill "$server_pid" 2>/dev/null || true' EXIT

ready=false
for _ in {1..30}; do
  if ! kill -0 "$server_pid" 2>/dev/null; then
    echo "Could not start the local server on port $port. Set RESUME_PORT to another port." >&2
    exit 1
  fi
  if curl --silent --fail "http://127.0.0.1:$port/resume.html" >/dev/null; then
    ready=true
    break
  fi
  sleep 0.1
done

if [[ "$ready" != true ]]; then
  echo "Timed out waiting for the local résumé preview server." >&2
  exit 1
fi

"$chrome_bin" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$output_pdf" \
  "http://127.0.0.1:$port/resume.html"

echo "Updated $output_pdf from resume.html"
