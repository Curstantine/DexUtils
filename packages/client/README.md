# @dexutils/client

Lightweight ESM-only client library written for the [MangaDex](https://api.mangadex.org/)'s public API.

### NOTE

When using this library, you must provide your own[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
implementation on `globalThis`.

On browsers, this is provided by `window.fetch`;
as for node, you can polyfill it with [`undici`](https://github.com/node/undici)
or [`node-fetch`](https://github.com/node-fetch/node-fetch).

Using `undici`:
```js
import { fetch } from "undici";
globalThis.fetch = fetch;
```

Using `node-fetch`:
```js
import fetch from "node-fetch";
globalThis.fetch = fetch;
```