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

const loadPeople = (): Person[] => {
    const data = fs.readFileSync(path.join(__dirname, 'people.json'), 'utf8');
    return JSON.parse(data);
  };

let people = loadPeople()


app.get("/", (req: Request, res: Response) => {
	res.send("Backend with TS is running!");
});

app.get("/people", (req, res) => {
	res
        .status(200)
        .json(people);
});

app.get("/people/:id", (req, res) => {
	const id: number = Number(req.params.id);
	const person = people.find((e) => e.id == id);

    return person ? res.status(200).json(person) : res.status(404).end();
});

app.post("/people", (req, res) => {
	const { name, street, city, country } = req.body;

	if (!name || !street || !city || !country) {
		res.status(400).send("Missing information");
	}

	const newPerson: Person = {
		id: people.length + 1,
		name,
		street,
		city,
		country,
	};

	people.push(newPerson);

	res.status(201).send(`${name} is added to database`);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
