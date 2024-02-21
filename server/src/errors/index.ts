export class CustomAPIError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class BadRequestError extends CustomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 400;
	}
}

export class NotFoundError extends CustomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 404;
	}
}
export class UnauthenticatedError extends CustomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 401;
	}
}

export class UnauthorizedError extends CustomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 403;
	}
}
