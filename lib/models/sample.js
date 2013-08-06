// load backbone
var Backbone = require('backbone');

// model code
var Sample = Backbone.Model.extend({
  initialize: function() {
    console.log("initialized sample model");
  }
});

module.exports = Sample;