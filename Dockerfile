# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS frontend-build
WORKDIR /app

COPY package.json package-lock.json ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/
RUN npm ci

COPY frontend ./frontend

ARG VITE_API_URL=
ARG VITE_ENABLE_REALTIME=true
ARG VITE_GETSTREAM_API_KEY=
ARG VITE_WS_URL=
ARG VITE_BASE_PATH=/
ENV VITE_API_URL=$VITE_API_URL \
    VITE_ENABLE_REALTIME=$VITE_ENABLE_REALTIME \
    VITE_GETSTREAM_API_KEY=$VITE_GETSTREAM_API_KEY \
    VITE_WS_URL=$VITE_WS_URL \
    VITE_BASE_PATH=$VITE_BASE_PATH

RUN npm run build --workspace frontend

FROM node:22-bookworm-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000

COPY package.json package-lock.json ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/
RUN npm ci --omit=dev --workspace backend --include-workspace-root

COPY backend ./backend
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/api/health').then((r) => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "backend/src/index.js"]
