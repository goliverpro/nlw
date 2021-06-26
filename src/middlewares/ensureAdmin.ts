import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { isNamedExportBindings } from "typescript";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(req: Request, res: Response, nex: NextFunction){

    const { user_id} = req

    const usersRepositories = getCustomRepository(UsersRepositories);

    const {admin} = await usersRepositories.findOne(user_id);

    if(admin){
        return nex();
    } 
    return res.status(401).json({
        error: "Unauthorized",
    });
}