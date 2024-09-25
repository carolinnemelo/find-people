import express, { Express, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Express = express();
const port = 3001;

app.use(express.json());

type Person = {
    id: number;
    name: string;
    street: string;
    city: string;
    country: string;
}

const people: Person[] = [
	{
		id: 1,
		name: "Lucas Lima",
		street: "Rua das Palmeiras",
		city: "Santos",
		country: "Brasil",
	},
	{
		id: 2,
		name: "Bruno Mendes",
		street: "Avenida Central",
		city: "Campinas",
		country: "Brasil",
	},
	{
		id: 3,
		name: "Paula Alves",
		street: "Rua do Porto",
		city: "Manaus",
		country: "Brasil",
	},
	{
		id: 4,
		name: "Felipe Nunes",
		street: "Rua das Laranjeiras",
		city: "Fortaleza",
		country: "Brasil",
	},
	{
		id: 5,
		name: "Ana Borges",
		street: "Avenida Rio Verde",
		city: "Goiania",
		country: "Brasil",
	},
];



app.get("/", (req: Request, res: Response) => {
	res.send("Backend with TS is running!");
});

app.get("/people", (req, res) => {
	res
        .status(200)
        .json(people);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
