import express from "express";
import UserControllers from "../../controllers/User.controller"

const router = express.Router();
const{login} = UserControllers;

router.post('/login', login)

export default router;