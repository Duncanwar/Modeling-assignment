import express from "express";
import OrderController  from "../../controllers/Order.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication";

const router = express.Router();

router.post('/order',tokenAuthentication,OrderController.createOrder)
export default router