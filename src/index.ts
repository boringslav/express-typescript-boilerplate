import express, { Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res): void => {
	res.send('Hello Typescript with Node.js!');
});
app.listen(PORT, (): void => {
	console.log('App listening on port ', PORT);
});
