import { NextFunction, Request, Response } from "express";

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const customError = {
        statusCode: err.statusCode
    }
}