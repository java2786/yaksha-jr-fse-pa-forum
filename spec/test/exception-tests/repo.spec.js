var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");
var repo = require("./../../../src/repository/crud");


describe('exception', function () {
    describe('post', function () {

        // it("should throw an error with invalid id", async function () {
        //     let error;
        // try {
        //     await repo.getById('posts', "s11");
        // } catch (e) {
        //     error = e;
        // }
        // const expectedError = new Error("invalid id");
        // expect(error).toEqual(expectedError)
        // })




    });
    afterEach(() => {
        writeTestResult(testResultFiles.exceptionTestFile);
    })
});



