import express from "express";
import morgan from "morgan";
import {helloWorld} from "app-chat-business";
import {ApiDescriptor} from "app-chat-model";

const app = express();
app.use(morgan('tiny'));
const port = 3000;
app.get("/", (_, res)=> {
    const a : ApiDescriptor = {
        version: "1.0.0"
    }
    res.send(helloWorld().concat(a.version));
})
app.listen(port, () => {
    return console.log("Listening on port ", port);
})
