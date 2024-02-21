"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.UnauthenticatedError = exports.NotFoundError = exports.BadRequestError = exports.CustomAPIError = void 0;
class CustomAPIError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.CustomAPIError = CustomAPIError;
class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
exports.NotFoundError = NotFoundError;
class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=index.js.map