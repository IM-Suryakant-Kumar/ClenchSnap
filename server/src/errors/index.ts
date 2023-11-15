import { StatusCodes } from "http-status-codes";

export class CustomAPIError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class BadRequestError extends CustomAPIError {
    statusCode: number;
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export class NotFoundError extends CustomAPIError {
    statusCode: number;
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}
export class UnauthenticatedError extends CustomAPIError {
    statusCode: number;
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export class UnauthorizedError extends CustomAPIError {
    statusCode: number;
    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.FORBIDDEN
    }
}