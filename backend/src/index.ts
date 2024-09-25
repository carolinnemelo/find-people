import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
	res.send("Backend with TS is running!");
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
