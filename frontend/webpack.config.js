const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: false,
      https: false,
      stream: false,
      zlib: false,
      util: false,
      url: false,
      assert: false,
    },
  },
};
