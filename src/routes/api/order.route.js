import express from "express";
import OrderController  from "../../controllers/Order.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication";

const router = express.Router();

router.post('/order',tokenAuthentication,OrderController.createOrder)
router.get('/order',tokenAuthentication,OrderController.getOrderByUserId)
router.put('/order/accept', tokenAuthentication,OrderController.receiveOrder)
router.put('/order/cancel', tokenAuthentication,OrderController.cancelOrder)

export default router