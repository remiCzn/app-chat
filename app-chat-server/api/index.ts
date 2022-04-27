import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (_, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`API Connected on port ${PORT}`);
})