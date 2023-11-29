"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router
    .route("/")
    .get(post_1.getAllPosts)
    .post(middleware_1.authenticateUser, post_1.createPost)
    .patch(middleware_1.authenticateUser, post_1.editPost);
router.route("/:postId").delete(middleware_1.authenticateUser, post_1.deletePost);
exports.default = router;
//# sourceMappingURL=post.js.map