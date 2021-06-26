import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign} from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { Subject } from "typeorm/persistence/Subject";

interface IAutheticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAutheticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
            email,
        })
        if (!user) {
            throw new Error("Email/Password incorrect");
        }
        const passMatch = await compare(password, user.password)

        if (!passMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        },  "647431b5ca55b04fdf3c2fce31ef1915", 
        {
            subject : user.id,
            expiresIn: "1d"
        });
        return token;
    }
}

export { AuthenticateUserService };