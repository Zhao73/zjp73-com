export default {
    async fetch(request, env) {
          const url = new URL(request.url);
          if (url.hostname === 'design.zjp73.com' && !url.pathname.startsWith('/design')) {
                  url.pathname = '/design' + url.pathname;
                  return env.ASSETS.fetch(new Request(url, request));
          }
          return env.ASSETS.fetch(request);
    }
};
