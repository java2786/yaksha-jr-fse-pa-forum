var fs = require('fs');

// module.exports = function(testName, result, file){
    module.exports = function(file){
        
    // console.log(global.currentSpec.id)
    // console.log(global.currentSpec.fullName)
    // console.log(global.currentSpec.failedExpectations.length)


    let testName = global.currentSpec.fullName;
    let testNameToCamelCase = testName.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/^\w/, c => c.toLowerCase());

    let result = global.currentSpec.failedExpectations.length == 0;

    fs.appendFileSync(file, `${testNameToCamelCase}=${result}\n`);

    // fs.writeFile(file, `${testNameToCamelCase}=${result}\n`, function(err) {
    // });
    
    // fs.appendFile(file, `${testNameToCamelCase}=${result}\n`, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });


}

