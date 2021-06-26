import {Request, Response, NextFunction } from "express"
import {verify} from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated( req: Request, res: Response, next: NextFunction){
     
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }
    const [,token] = authToken.split(" ");
    try{
        const {sub} = verify(token, "647431b5ca55b04fdf3c2fce31ef1915") as IPayload;
        req.user_id = sub;
        return next();
    }catch(err){
        return res.status(401).end();
    }


}