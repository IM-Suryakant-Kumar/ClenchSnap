"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = exports.userRouter = exports.authRouter = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
var user_1 = require("./user");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
var post_1 = require("./post");
Object.defineProperty(exports, "postRouter", { enumerable: true, get: function () { return __importDefault(post_1).default; } });
//# sourceMappingURL=index.js.map