import { config } from "dotenv";
import express, { Request, Response } from "express";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware";

config()
const app = express();


// Test
app.get("/", async (req: Request, res: Response) => {
    res.status(200).send("<h2>Server Working!👍👍👍</h2>")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const PORT = process.env.PORT || 4000;
const start = () => {
	try {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
