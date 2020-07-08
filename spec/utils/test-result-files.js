var fs = require('fs');

businessTestFile = "./output_revised.txt";
boundaryTestFile = "./output_boundary_revised.txt";
exceptionTestFile = "./output_exception_revised.txt";

exports.businessTestFile = businessTestFile;
exports.boundaryTestFile = boundaryTestFile;
exports.exceptionTestFile = exceptionTestFile;


fs.unlink(businessTestFile, (err)=>{if(err) console.log(`${businessTestFile} not deleted`);});
fs.unlink(boundaryTestFile, (err)=>{if(err) console.log(`${boundaryTestFile} not deleted`);});
fs.unlink(exceptionTestFile, (err)=>{if(err) console.log(`${exceptionTestFile} not deleted`);});

