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
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// Test
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("<h2>Server Working!👍👍👍</h2>");
}));
const PORT = process.env.PORT || 4000;
const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=app.js.map