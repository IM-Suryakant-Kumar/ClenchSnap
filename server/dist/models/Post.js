"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    avatar: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    liked: [{ type: String, required: true }],
    saved: [{ type: String, required: true }],
    comments: [
        {
            userName: { type: String, required: true },
            avatar: { type: String, required: true },
            content: { type: String, required: true },
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Post", PostSchema);
//# sourceMappingURL=Post.js.map