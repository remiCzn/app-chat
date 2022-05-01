import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import authApi from "./authApi";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));

app.use('/auth', authApi);

app.listen(PORT, () => {
    console.log(`API Connected on port ${PORT}`);
})