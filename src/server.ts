import "reflect-metadata";
import express, {Request, Response, NextFunction, response} from "express";
import "express-async-errors";

import { router} from "./routes";


import "./database";

const app = express();

app.use(express.json())

app.use(router);

app.use((err: Error, req: Request, res: Response)=> {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error!"
    })
})


app.listen(3000, () => console.log("Server is running"))