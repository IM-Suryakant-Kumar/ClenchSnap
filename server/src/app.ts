import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware";
import authRouter from "./routes/auth";

config();
const app = express();
const CLIENT_URL: string = process.env.CLIENT_URL;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(morgan("tiny"))
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cookieParser())

// routers
app.use(authRouter)

// Test
app.get("/", async (req: Request, res: Response) => {
	res.status(200).send("<h2>Server Working!👍👍👍</h2>");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 4000;
const start = () => {
	try {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
