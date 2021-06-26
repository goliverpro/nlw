import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";



class ListUserReceiveController {
    async handle(req: Request, res: Response){
        const { user_id} = req;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return res.json(compliments);
    }
}

export{ ListUserReceiveController}