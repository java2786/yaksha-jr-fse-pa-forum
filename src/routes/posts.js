const express = require('express');
const router = express.Router();
const postService = require("./../services/posts")

router.get("/", postService.getAll);
router.post("/", postService.post);
router.get("/titles", postService.getTitles);

module.exports = router;