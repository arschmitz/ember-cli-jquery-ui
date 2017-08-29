/* jshint node: true */
'use strict';
var path = require('path');
var fastbootTransform = require('fastboot-transform');
var files = [
  'ui/version.js',
  'ui/data.js',
  'ui/ie.js',
  'ui/scroll-parent.js',
  'ui/plugin.js',
  'ui/safe-active-element.js',
  'ui/safe-blur.js',
  'ui/widget.js',
  'ui/widgets/mouse.js',
  'ui/widgets/draggable.js',
  'ui/widgets/sortable.js'
]

module.exports = {
  name: 'ember-cli-jquery-ui',

  options: {
    nodeAssets: {
      'jquery-ui': {
        vendor: {
          include: files,
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    files.forEach((file) => {
      app.import(`vendor/jquery-ui/${file}`)
    })
  }
};
