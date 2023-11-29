"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    avatar: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    isLiked: { type: Boolean, default: false },
    isSaved: { type: Boolean, default: false },
    Likes: { type: Number, default: 0 },
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