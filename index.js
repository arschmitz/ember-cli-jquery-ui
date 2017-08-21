/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-jquery-ui',

  options: {
    nodeAssets: {
      'jquery-ui': {
        vendor: ['jquery-ui.js'],
        processTree(input) {
          return fastbootTransform(input);
        }
      }
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/jquery-ui/jquery-ui.js');
  }
};
