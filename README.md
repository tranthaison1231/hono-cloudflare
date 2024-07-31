# Hono Cloudflare Worker

## Commands

```
bun install
bun run dev
```

## Deploy

```
bun run deploy
```

## Database

```shell
wrangler d1 create hono-cloudflare-worker-d1
wrangler d1 execute hono-cloudflare-worker-d1 --local --file=./schema.sql
wrangler d1 execute hono-cloudflare-worker-d1 --file=./schema.sql
```
