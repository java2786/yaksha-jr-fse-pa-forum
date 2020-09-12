var jasmine = require('jasmine')
var Jasmine = new jasmine();
const CurrentSpecReporter = require('./current-spec-reporter.js');
const CustomXmlReporter = require('./custom-xml-reporter');
var JsonReporter = require("./custom-json-reporter")


// load config file
Jasmine.loadConfigFile("./spec/support/jasmine.json");


// add custom reporter
Jasmine.addReporter(new CurrentSpecReporter());

let generateXML = true;
if(generateXML){
    Jasmine.addReporter(new CustomXmlReporter());
}


// add json reporter
Jasmine.addReporter(new JsonReporter({
    beautify: true,
    indentationLevel: 4, // used if beautify === true
    file: 'resultForXml.json'
}));


// execute
Jasmine.execute();



// node thisFileName.js
// node spec/jasmine-conig/jasmine-runner




