import { config } from "dotenv";
import express, { Request, Response } from "express";
import notFoundMiddleware from "./middleware/not-found";

config()
const app = express();


// Test
app.get("/", async (req: Request, res: Response) => {
    res.status(200).send("<h2>Server Working!👍👍👍</h2>")
})

app.use(notFoundMiddleware)
const PORT = process.env.PORT || 4000;
const start = () => {
	try {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
