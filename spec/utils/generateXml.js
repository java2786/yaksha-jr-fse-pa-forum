var builder = require('xmlbuilder');
var fs = require("fs");
// const { type } = require('os');
const jsonData = require('./../../resultForXml.json');

var xml = builder.create('test-cases');

readJson(jsonData);
writeXml();



function readJson(data){
    for (var jsonDataKey in data) {
        let type, result, name;
        type = jsonData[jsonDataKey].fullName.split(" ")[0];
    
        for (var specsKey in jsonData[jsonDataKey].specs) {
            name = jsonData[jsonDataKey].specs[specsKey].fullName;
    
            result = jsonData[jsonDataKey].specs[specsKey].status == "passed";
    
    
            prepareXml(capitalize(type), name, result);
    
        }
    
    
    }
}



function prepareXml(type, name, result) {
    xml.ele('cases', { "xmlns:java": "http://java.sun.com", "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xsi:type": "java:com.assessment.data.TestCase" })
    .ele('test-case-type', type).up()
    .ele('expected-output', result).up()
    .ele('name', name).up()
    .ele('weight', 2).up()
    .ele('mandatory', true).up()
    .ele('desc', "na")
    .end();
}


function writeXml() {
    var xmldoc = xml.toString({ pretty: true });
    var fileName = "Yaksha forum testcases.xml";
    fs.writeFileSync(fileName, xmldoc);
}


function capitalize(str){
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
