import {Request, Response, NextFunction} from "express"
import { isNamedExportBindings } from "typescript";

export function ensureAdmin(req: Request, res: Response, nex: NextFunction){
    const admin = true;

    if(admin){
        return nex();
    } 
    return res.status(401).json({
        error: "Unauthorized",
    });
}