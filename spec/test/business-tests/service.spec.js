var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");

const commentService = require("./../../../src/services/comments");

var mocks = require('node-mocks-http');

describe('business', function () {
    describe('service', function () {

        it("should ViewAllComments", function () {
            req = mocks.createRequest(
                // {
                //     method: 'GET',
                //     url: '/a/b',
                //     params: {
                //       id: 42
                //     }
                // }
            );
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });

            
            
            res.on('end', function () {
                
                expect(res.statusCode).toBe(200);
                expect(res._isJSON()).toBeTruthy();

            })

            commentService.getAll(req, res);
        })

        it("should SaveComments", function () {
            req = mocks.createRequest(
                {
                    method: 'POST',
                    // url: '/a/b',
                    body: {
                      postid: 2,
                      tags: "some tag tt",
                      comment: "some comment tt"
                    }
                }
            );
            res = mocks.createResponse({
                eventEmitter: require('events').EventEmitter
            });

            
            
            res.on('end', function () {
                
                expect(res.statusCode).toBe(200);

            })

            commentService.post(req, res);

        })



        it("should PostService", function () { })

        it("should ViewAllPosts", function () { })

        afterEach(() => {
            writeTestResult(testResultFiles.businessTestFile);
        })


    })
})
