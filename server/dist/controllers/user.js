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
exports.getAllusers = exports.updateUser = exports.getLoggedInUser = void 0;
const models_1 = require("../models");
// get logged-in user
const getLoggedInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    const user = yield models_1.User.findById(_id);
    res.status(200).json({ success: true, user });
});
exports.getLoggedInUser = getLoggedInUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, body, } = req;
    yield models_1.User.findByIdAndUpdate(req.body._id, body, {
        new: true,
    });
    const user = yield models_1.User.findById(_id);
    const users = yield models_1.User.find();
    res.status(200).json({
        success: true,
        message: "Successfully Updated!",
        user,
        users,
    });
});
exports.updateUser = updateUser;
const getAllusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.User.find();
    res.status(200).json({ success: true, users });
});
exports.getAllusers = getAllusers;
//# sourceMappingURL=user.js.map