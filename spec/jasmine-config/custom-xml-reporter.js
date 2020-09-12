var builder = require('xmlbuilder');
var fs = require("fs");
// const { type } = require('os');
const path = 'resultForXml.json';

// var a = require("./../../resultForXml.json")

class CustomXmlReporter {

  jasmineDone(result){

      // console.log(fs.existsSync(path))
  
      let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
      // console.log(data);
      
      var xml = builder.create('test-cases');




      xml.ele('cases', {"xmlns:java": "http://java.sun.com", "xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance", "xsi:type":"java:com.assessment.data.TestCase"})
      .ele('test-case-type', "Functional").up()
      .ele('expected-output', true).up()
      .ele('name', "testSaveComments").up()
      .ele('weight', 2).up()
      .ele('mandatory', true).up()
      .ele('desc', "na")
      .end();




      var xmldoc = xml.toString({ pretty: true }); 
      var dirPath = __dirname + "/abc.xml";
      fs.writeFile(dirPath, xmldoc, function(err) {
          // if(err) { return console.log(err); } 
          //    console.log("The file was saved!");
             
          //    res.render('index');
       });



    
  }

}

module.exports = CustomXmlReporter;