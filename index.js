const canIframeHeader = (h, originUrl, domain) => {
  // header is 'X-Frame-Options' value
  const header = h ? h.toLowerCase() : null

  const originDomain = (new URL(originUrl)).hostname

  if (!header) {
    return true
  }

  if (header === 'deny') {
    return false
  }

  // From now on, checking `allow-from` & `sameorigin`.

  if (!domain) {
    return false
  }

  if (header === 'sameorigin') {
    return originDomain === domain
  }

  if (header.indexOf('allow-from') >= 0) {
    const match = /^allow-from (.*)$/.exec(header)
    if (!match[1]) {
      return false
    }

    const url = new URL(match[1])
    return url.hostname === domain
  }

  // Invalid HTTP header.
  return false
};

const canIframeUrl = fetch => (url, domain, options = {}) => {
  if (!url) {
    return Promise.resolve(false);
  }

  const fetchRequest = new Request(url);
  const fetchOptions = Object.assign({
    method: 'OPTIONS',
  }, options, {});

  return fetch(fetchRequest, fetchOptions)
    .then(fetchResponse => {
      try {
        return canIframeHeader(fetchResponse.headers.get('X-Frame-Options'), url, domain);
      } catch (err) {
        return false;
      }
    });
};

// UMD Module
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(['isomorphic-fetch'], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('isomorphic-fetch'));
  } else {
    // Browser globals (root is window)
    root.canIframeUrl = factory(root.fetch);
  }
})(typeof self !== "undefined" ? self : this, function(fetch) {
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return canIframeUrl(fetch);
});
