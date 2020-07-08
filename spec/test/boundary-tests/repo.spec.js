var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");
var repo = require("./../../../src/repository/crud");


describe('boundary', function () {
    describe('post', function () {

        it("should not be found with id=1000", function () {
            repo.getById('posts', 1000, (err, res)=>{
                expect(res.message).toBeDefined();
                expect(res.message).toBeInstanceOf(String);
                expect(res.message).toEqual("Given id is not available in database");

            });
        })




    });
    afterEach(() => {
        writeTestResult(testResultFiles.boundaryTestFile);
    })
});



