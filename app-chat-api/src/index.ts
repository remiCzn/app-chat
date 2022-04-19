import express from "express";
import morgan from "morgan";
import {helloWorld} from "app-chat-business";

const app = express();
app.use(morgan('tiny'));
const port = 3000;
app.get("/", (_, res)=> {
    res.send(helloWorld());
})
app.listen(port, () => {
    return console.log("Listening on port ", port);
})
