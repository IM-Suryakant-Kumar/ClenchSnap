"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const notFoundMiddleware = (req, res) => res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Route does not exists!");
exports.default = notFoundMiddleware;
//# sourceMappingURL=not-found.js.map