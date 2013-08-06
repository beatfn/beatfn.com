// load nimbus
var syncObject = {
  "GDrive": {
    "key": "216467454397-j6h48eli5s0b5o89dd7ppmdts9imittd.apps.googleusercontent.com",
    "scope": "https://www.googleapis.com/auth/drive",
    "app_name": "beatfn.com"
  },
  "Dropbox": {
    "key": "ug4ixd89xzumt6d",
    "secret": "6b9oufrs0sqixu8",
    "app_name": "beatfn.com"
  }
};
Nimbus.Auth.authorized_callback = init;
console.log("about to setup");
Nimbus.Auth.setup(syncObject);
//Nimbus.Auth.authorize('Dropbox');
console.log("setup done");

//init();

function init() {
  console.log("moooo!");
  Backbone.sync = Nimbus.backbone_sync;

  if (Nimbus.Auth.authorized()) {
    var Samples = require('./lib/collections/samples.js'),
        nimbusStore = Samples.nimbus;

    nimbusStore.sync_all(function() {
      Samples.fetch();
    });
  }
}

