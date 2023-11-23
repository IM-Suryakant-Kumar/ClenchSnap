"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    const customError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong try again",
    };
    if (err.name === "ValidationError") {
        customError.message = Object.values(err.errors)
            .map((item) => item.message)
            .join(",");
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    if (err.code && err.code === 11000) {
        // customError.message = `Duplicate value entered for ${Object.keys(
        // 	err.keyValue,
        // )} field, please choose another value`;
        customError.message = `This ${Object.keys(err.keyValue)} is already exists, please choose another value`;
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    if (err.name === "CastError") {
        customError.message = `No item found with id : ${err.value}`;
        customError.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    }
    // Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        customError.message = `Json Web Token is invalid, Try again `;
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    // JWT EXPIRE error
    if (err.name === "TokenExpiredError") {
        customError.message = `Json Web Token is Expired, Try again `;
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    res.status(customError.statusCode).json({
        success: false,
        message: customError.message,
        error: err,
    });
};
exports.default = errorHandlerMiddleware;
//# sourceMappingURL=error-handler.js.map