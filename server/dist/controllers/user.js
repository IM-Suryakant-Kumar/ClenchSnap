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
exports.getAllusers = exports.updateUser = exports.getLoggedInUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const http_status_codes_1 = require("http-status-codes");
// get logged-in user
const getLoggedInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    const user = yield User_1.default.findById(_id);
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, user });
});
exports.getLoggedInUser = getLoggedInUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, body, } = req;
    const user = yield User_1.default.findByIdAndUpdate(req.body._id, body, {
        new: true,
    });
    const users = yield User_1.default.find();
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "Successfully Updated!",
        user,
        users,
    });
});
exports.updateUser = updateUser;
const getAllusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find();
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, users });
});
exports.getAllusers = getAllusers;
//# sourceMappingURL=user.js.map