import { classToPlain } from "class-transformer";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUsersService {
    async execute(){
        const listUsersRepositories = new UsersRepositories();
        const users = await listUsersRepositories.find();

        return classToPlain(users);
    }
}

export {ListUsersService};