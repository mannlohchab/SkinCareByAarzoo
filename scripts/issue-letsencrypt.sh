#!/bin/sh
set -eu

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

EMAIL="${CERTBOT_EMAIL:-skincare.by.aarzoo@gmail.com}"
DOMAIN="${NGINX_DOMAIN:-skincarebyaarzoo.com}"

echo "Requesting Let's Encrypt cert for ${DOMAIN} and www.${DOMAIN} as ${EMAIL}..."
docker compose run --rm --entrypoint certbot certbot certonly \
  --webroot -w /var/www/certbot \
  -d "$DOMAIN" -d "www.${DOMAIN}" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  --non-interactive \
  --keep-until-expiring

echo "Restarting Nginx so it picks up HTTPS..."
docker compose up -d --force-recreate nginx

echo "Done. Open https://${DOMAIN}"
