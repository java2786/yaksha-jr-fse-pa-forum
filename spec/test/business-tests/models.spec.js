const Post = require("./../../../src/entities/post");
var writeTestResult = require("./../../utils/write-test-result");
var testResultFiles = require("./../../utils/test-result-files");

describe('business', function () {

    describe('post', function () {

        it('should be created before save in database', function () {
            const Post = require("./../../../src/entities/post");
            let now = Date.now();
            let title = "title_" + now;
            let description = "description_" + now;
            let tags = "tags_" + now;
            let newPost = Post.build({ title, description, tags });
            expect(newPost).toBeInstanceOf(Post);
            expect(newPost.title).toEqual(title)
            expect(newPost.description).toEqual(description)
            expect(newPost.tags).toEqual(tags)
            expect(newPost.id).toBeNull();

        })

        it('should be saved', async function () {
            let now = Date.now();
            let title = "title_" + now;
            let description = "description_" + now;
            let tags = "tags_" + now;
            let newPost = await Post.create({ title, description, tags });

            expect(newPost).toBeInstanceOf(Post);
        })

        it("should be fetched from database", (done) => {
            Post.findAll().then(posts => {
                expect(posts).not.toBeNull();
                expect(posts.length).toBeGreaterThanOrEqual(0);
                done();
            })

        })

        it('should be not saved', function () {
            let now = Date.now();
            let title = "title_" + now;
            // let description = "description_"+now;
            let tags = "tags_" + now;
            let newPost = Post.build({ title, tags });

            newPost.validate()
                .then(() => {
                    // valid
                }).catch((err) => {
                    expect(err.errors.length).toBeGreaterThan(0);
                    expect(err.errors[0].type).toBeDefined();
                    expect(err.errors[0].type).toEqual("notNull Violation");
                    expect(err.errors[0].message).toContain("cannot be null");

                })
            // expect(newPost).toBeInstanceOf(Post);
        })


        afterEach(() => {
            writeTestResult(testResultFiles.businessTestFile);
        })

    });

    afterEach(() => {
        writeTestResult(testResultFiles.businessTestFile);
    })

});


