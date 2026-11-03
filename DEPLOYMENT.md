# Cloudflare Worker build

Use Node.js 22 or later (`.nvmrc` selects 22) and install from the lockfile:

```sh
npm ci
npm run build
```

`build` runs Next.js once, then OpenNext with `--skipNextBuild`. It produces
`.open-next/worker.js` and `.open-next/assets`. Wrangler's entry is `worker.js`,
which wraps the generated Worker with a permanent redirect from gordesview.com
to https://www.gordesview.com, preserving the path and query. HTTP requests to
www also redirect to HTTPS. Other hosts, including branch Previews, pass through.
`assets.run_worker_first` ensures apex asset requests receive the same redirect.
OpenNext serves matching assets through the ASSETS binding after the wrapper.

Workers Builds configuration:

- Build command: `npm run build`
- Production deploy command: `npx wrangler deploy`
- Non-production branch Preview command: `npx wrangler preview`

Wrangler 4.156.2 supports branch Previews (minimum 4.135.0). The empty `previews`
block enables the same resource-free configuration for branch Previews. Branch Previews are remote deployments with publicly reachable URLs by default.
The config intentionally omits route and custom-domain declarations, retaining
existing dashboard domain assignments; do not replace them with an empty list.
No R2, KV, database, secret, or service binding is required by this site. The
OpenNext default cache implementations are disabled; adding ISR or cached data
later requires an explicit caching design and deploy-time cache population.

For local Worker preview, run `npm run preview`, or after building:

```sh
npx wrangler dev
```

For a deployment packaging check without publishing:

```sh
npx wrangler deploy --dry-run
```

Do not call `opennextjs-cloudflare build` directly: the project's `build`
script already performs both stages. `npm run build:next` is available for
Next.js-only checks.

Next.js stays pinned at 16.3.6. OpenNext is pinned at 1.19.0, whose declared Next.js
peer range includes this version. Newer OpenNext 1.20.15 requires Next.js 16.4.1
or later; assess that upgrade separately rather than silently changing Next.js.

References: [OpenNext setup](https://opennext.js.org/cloudflare/get-started),
[custom Workers](https://opennext.js.org/cloudflare/howtos/custom-worker), and
[Cloudflare Previews](https://developers.cloudflare.com/workers/previews/get-started/).
