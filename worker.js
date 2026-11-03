import handler from './.open-next/worker.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === 'gordesview.com' ||
        (url.hostname === 'www.gordesview.com' && url.protocol !== 'https:')) {
      url.protocol = 'https:';
      url.hostname = 'www.gordesview.com';
      url.port = '';
      return Response.redirect(url.toString(), 308);
    }
    if (url.pathname.startsWith("/gallery/") || url.pathname.startsWith("/_next/static/")) {
      return env.ASSETS.fetch(request);
    }
    return handler.fetch(request, env, ctx);
  },
};
