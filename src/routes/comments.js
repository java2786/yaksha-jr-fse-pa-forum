const express = require('express');
const router = express.Router();
const commentService = require("./../services/comments");

router.get("/", commentService.getAll);
router.post("/", commentService.post);

module.exports = router;