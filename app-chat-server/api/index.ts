import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('tiny'));

app.get('/', (_, res) => {
    res.send("Hello world");
})

app.post('/login', (req, res) => {
    const parameters = req.body;
    console.log(parameters)
    res.send("okok");
})

app.listen(PORT, () => {
    console.log(`API Connected on port ${PORT}`);
})