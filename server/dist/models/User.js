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
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: [true, "fullname is required"],
        maxlength: 20,
        minlength: 3,
    },
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        maxlength: 20,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false,
    },
    avatar: { type: String },
    bio: { type: String },
    website: { type: String },
    followers: [{ type: String, required: true }],
    followings: [{ type: String, required: true }]
}, { timestamps: true });
UserSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password"))
            return;
        const salt = yield bcryptjs_1.default.genSalt(10);
        this.password = yield bcryptjs_1.default.hash(this.password, salt);
    });
});
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(candidatePassword, this.password);
    });
};
UserSchema.methods.createJWTToken = function () {
    const JWT_SECRET = process.env.JWT_SECRET;
    const JWT_LIFETIME = process.env.JWT_LIFETIME;
    return jsonwebtoken_1.default.sign({ _id: this._id }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};
exports.default = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=User.js.map