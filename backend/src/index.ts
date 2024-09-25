import express, { Express, Request, Response } from "express";

type Person = {
    id: number;
    name: string;
    street: string;
    city: string;
    country: string;
}

const app: Express = express();
const port = 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Backend with TS is running!");
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
