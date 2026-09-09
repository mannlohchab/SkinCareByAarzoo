#!/bin/sh
set -e

DOMAIN="${NGINX_DOMAIN:-skincarebyaarzoo.com}"
CERT="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
KEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"
TARGET="/etc/nginx/conf.d/skincare.conf"

mkdir -p /etc/nginx/conf.d

if [ -f "$CERT" ] && [ -f "$KEY" ]; then
  cp /etc/nginx/templates/https.conf "$TARGET"
  echo "Nginx: using HTTPS config for ${DOMAIN}"
else
  cp /etc/nginx/templates/http.conf "$TARGET"
  echo "Nginx: using HTTP config until Let's Encrypt certs exist"
fi
