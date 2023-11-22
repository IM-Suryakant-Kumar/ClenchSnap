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
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const User_1 = __importDefault(require("../models/User"));
const sendToken_1 = __importDefault(require("../utils/sendToken"));
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { name, email, avatar, password }, } = req;
    if (!(name && email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const user = yield User_1.default.create({ name, email, avatar, password });
    (0, sendToken_1.default)(user, http_status_codes_1.StatusCodes.CREATED, res, "Successfully registered");
});
exports.createUser = createUser;
// Login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { email, password }, } = req;
    if (!(email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const user = yield User_1.default.findOne({ email });
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid Credentials!");
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect)
        throw new errors_1.UnauthorizedError("Invalid credentials!");
    (0, sendToken_1.default)(user, http_status_codes_1.StatusCodes.CREATED, res, "Successfully logged in");
});
exports.login = login;
// guest login
const guestLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: "clench@gmail.com" });
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid Credentials!");
    const isPasswordCorrect = yield user.comparePassword("secret");
    if (!isPasswordCorrect)
        throw new errors_1.UnauthorizedError("Invalid credentials!");
    (0, sendToken_1.default)(user, http_status_codes_1.StatusCodes.CREATED, res, "Successfully logged in");
});
exports.guestLogin = guestLogin;
// Logout user
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("token", null, { maxAge: 0, httpOnly: true })
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ success: true, message: "Logged out successfully!" });
});
exports.logout = logout;
//# sourceMappingURL=auth.js.map