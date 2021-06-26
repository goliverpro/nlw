import {Router} from 'express'
import {CreateUserController} from "./controllers/CreateUserController";
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import {ListUserReceiveController} from './controllers/ListUserReceiveController'
import { ListUserSendController } from './controllers/ListUserSendController';
import { ListTagsController } from './controllers/ListTagController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUsersController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController();
const listUserReceiveController = new ListUserReceiveController();
const listUserSendController = new ListUserSendController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();



router.post("/users", createUsersController.handle)
router.post("/tags",ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments",ensureAuthenticated, createComplimentController.handle)
router.get("/users/compliments/send",ensureAuthenticated, listUserSendController.handle)
router.get("/users/compliments/receive",ensureAuthenticated, listUserReceiveController.handle)
router.get("/users/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export {router};