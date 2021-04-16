import express from "express";
import UserControllers from "../../controllers/User.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication";

const router = express.Router();
const{login, signup} = UserControllers;

router.post('/login', login)
router.post('/signup', signup)
router.get('/user/:id', tokenAuthentication, UserControllers.getUserInfo)

export default router;