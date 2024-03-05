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
exports.logout = exports.guestLogin = exports.login = exports.createUser = void 0;
const errors_1 = require("../errors");
const models_1 = require("../models");
const utils_1 = __importDefault(require("../utils"));
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { fullname, username, email, password }, } = req;
    if (!(fullname && username && email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const emailAlreadyExists = yield models_1.User.findOne({ email });
    if (emailAlreadyExists) {
        throw new errors_1.BadRequestError("Email is already exists");
    }
    const user = yield models_1.User.create({ fullname, username, email, password });
    (0, utils_1.default)(user, 200, res, "Successfully registered");
});
exports.createUser = createUser;
// Login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { email, password }, } = req;
    if (!(email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const user = yield models_1.User.findOne({ email }).select("+password");
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid Credentials!");
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect)
        throw new errors_1.UnauthorizedError("Invalid credentials!");
    (0, utils_1.default)(user, 200, res, "Successfully logged in");
});
exports.login = login;
// guest login
const guestLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findOne({ email: "clenchsnap@gmail.com" }).select("+password");
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid Credentials!");
    const isPasswordCorrect = yield user.comparePassword("secret");
    if (!isPasswordCorrect)
        throw new errors_1.UnauthorizedError("Invalid credentials!");
    (0, utils_1.default)(user, 200, res, "Successfully logged in");
});
exports.guestLogin = guestLogin;
// Logout user
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .cookie("token", null, { maxAge: 0, httpOnly: true })
        .status(200)
        .json({ success: true, message: "Logged out successfully!" });
});
exports.logout = logout;
//# sourceMappingURL=auth.js.map