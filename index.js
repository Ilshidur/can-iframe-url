const canIframeHeader = (header, domain) => {
  
};

const canIframeUrl = fetch => (url, domain, options) => {
  if (!url) {
    return Promise.resolve(false);
  }
  if (!options) {
    options = domain || {};
    domain = null;
  }

  const fetchRequest = new Request(url);
  const fetchOptions = Object.assign({
    method: 'OPTIONS',
  }, options, {});

  return fetch(fetchRequest, fetchOptions)
    .then(fetchResponse => {
      try {
        return canIframeHeader(fetchResponse.headers.get('X-Frame-Options'), domain);
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
