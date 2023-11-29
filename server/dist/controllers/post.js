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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.createPost = exports.getAllPosts = void 0;
const http_status_codes_1 = require("http-status-codes");
const Post_1 = __importDefault(require("../models/Post"));
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_1.default.find();
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, posts });
});
exports.getAllPosts = getAllPosts;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id, fullname, avatar }, } = req;
    const posts = yield Post_1.default.create(Object.assign({ userId: _id, userName: fullname, avatar }, req.body));
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Successfully posted",
        posts,
    });
});
exports.createPost = createPost;
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    const posts = yield Post_1.default.findOneAndUpdate({ userId: _id }, req.body, {
        new: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Successfully updated",
        posts,
    });
});
exports.editPost = editPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { postId }, } = req;
    const posts = yield Post_1.default.findByIdAndDelete(postId, {
        new: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Successfully deleted",
        posts,
    });
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.js.map