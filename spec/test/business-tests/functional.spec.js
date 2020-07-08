var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");

describe('service', function () {
    it("should Save Post", async function () {
        const Post = require("./../../../src/entities/post");

        let now = Date.now();
        let title = "title_" + now;
        let description = "description_" + now;
        let tags = "tags_" + now;
        let newPost = await Post.create({ title, description, tags });

        expect(newPost).toBeInstanceOf(Post);
    })
    it("should Save Comment", async function () {
        const Comment = require("./../../../src/entities/comment");

        let now = Date.now();
        let comment = "comment" + now;
        let tags = "tags_" + now;
        let postid = 1;
        let newComment = await Comment.create({ comment, tags, postid });

        expect(newComment).toBeInstanceOf(Comment);
    })
    it("should View All Posts", function () {
        const Post = require("./../../../src/entities/post");

        Post.findAll()
            .then(data => {
                console.log(data.length)
                console.log(data[0].dataValues)

                expect(data.length).toBeGreaterThanOrEqual(0);
            })
    })
    it("should View All Comments", function () {
        const Comment = require("./../../../src/entities/comment");

        Comment.findAll()
            .then(data => {
                expect(data.length).toBeGreaterThanOrEqual(0);
            })
    })
    it("should View All Discussions", function () {
        const Post = require("./../../../src/entities/post");

        Post.findAll({ attributes: ['id', 'title'] })
            .then(function (data) {
                expect(data.length).toBeGreaterThanOrEqual(0);
            })
    })


    it("should Loading Page Url", function () { })
    it("should Add Post", function () { })
    it("should Save Posts", function () { })
    it("should Save Posts Case", function () { })
    it("should View All Posts", function () { })
    it("should View All Posts Case", function () { })
    it("should Add Comments", function () { })
    it("should Save Comments", function () { })
    it("should Save Comments Case", function () { })
    it("should View All Discussions", function () { })
    it("should View All Discussions Case", function () { })


    afterEach(()=>{
        writeTestResult(testResultFiles.boundaryTestFile);
    })
    

})