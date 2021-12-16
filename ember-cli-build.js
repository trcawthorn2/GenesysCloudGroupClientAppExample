'use strict';

const cdnUrl = './';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    fingerprint: {
      prepend: cdnUrl,
      enabled: true
    },
    'ember-cli-babel': {
      includePolyfill: true
    },
    'ember-bootstrap': {
      bootstrapVersion: 3,
      importBootstrapFont: true,
      importBootstrapCSS: false
    }, 
    minifyJS: {
      enabled: true
    },
    minifyCSS: {
      enabled: true
    },
    lessOptions: {
      paths: [
          'app/components',
          'app/styles'
      ]
    },
  });

  app.import('node_modules/fixtable/dist/fixtable.css');
  return app.toTree();
};
