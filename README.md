# SkinCare By Aarzoo

Web app for the SkinCare By Aarzoo clinic: patient accounts, chat with the clinic, video consultation booking with Razorpay payments, and an admin panel.

## Layout

- `frontend/` — React + Vite client
- `backend/` — Node/Express API with WebSocket support, backed by Postgres
- `nginx/` — reverse proxy config and Let's Encrypt automation for skincarebyaarzoo.com
- `Dockerfile`, `docker-compose.yml` — production packaging (app + Postgres + Nginx)
- `scripts/` — deployment helpers

## Local development

```
npm install
npm run dev --workspace backend
npm run dev --workspace frontend
```

The backend needs a `.env` in `backend/` with at least:

```
DATABASE_URL=postgres://user:pass@localhost:5432/skincare
SESSION_SECRET=change-me
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
GETSTREAM_API_KEY=
GETSTREAM_API_SECRET=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

Optional: `PORT`, `CORS_ORIGINS`, `DATABASE_SSL`, `SESSION_COOKIE_SECURE`, `TRUST_PROXY`, `APP_URL`.

## Production

```
docker compose up -d
```

Set the same variables plus `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` and `NGINX_DOMAIN` in the compose environment. The app image is published to GHCR by the GitHub Actions workflow on push to `main`.




COMPLETED