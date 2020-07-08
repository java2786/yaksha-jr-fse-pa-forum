// var fs = require('fs');
global.currentSpec = null;


class CurrentSpecReporter {

  specStarted(spec) {
    global.currentSpec = spec;

  }

  specDone() {
    global.currentSpec = null;
  }

}

module.exports = CurrentSpecReporter;