// load backbone
var Backbone = require('backbone');

var Sample = require('../models/sample.js');

var Samples = Backbone.Collection.extend({
  model: Sample,
  nimbus: new Nimbus.backbone_store('samples-backbone', Sample)
});

module.exports = Samples;