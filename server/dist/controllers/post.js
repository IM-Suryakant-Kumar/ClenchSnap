"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.createPost = exports.getAllPosts = void 0;
const models_1 = require("../models");
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield models_1.Post.find();
    res.status(200).json({ success: true, posts });
});
exports.getAllPosts = getAllPosts;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id, fullname, avatar }, } = req;
    yield models_1.Post.create(Object.assign({ userId: _id, userName: fullname, avatar }, req.body));
    const posts = yield models_1.Post.find();
    res.status(200).json({
        success: true,
        message: "Successfully posted",
        posts,
    });
});
exports.createPost = createPost;
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    yield models_1.Post.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
    });
    const posts = yield models_1.Post.find();
    res.status(200).json({
        success: true,
        message: "Successfully updated",
        posts,
    });
});
exports.editPost = editPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { postId }, } = req;
    yield models_1.Post.findByIdAndDelete(postId, {
        new: true,
    });
    const posts = yield models_1.Post.find();
    res.status(200).json({
        success: true,
        message: "Successfully deleted",
        posts,
    });
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.js.map