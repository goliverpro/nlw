import {Router} from 'express'
import {CreateUserController} from "./controllers/CreateUserController";
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const router = Router();

const createUsersController = new CreateUserController();
router.post("/users", createUsersController.handle)


const createTagController = new CreateTagController();
router.post("/tags",ensureAdmin, createTagController.handle)

const authenticateUserController = new AuthenticateUserController()
router.post("/login", authenticateUserController.handle)

const createComplimentController = new CreateComplimentController();
router.post("/compliments", createComplimentController.handle)

export {router};