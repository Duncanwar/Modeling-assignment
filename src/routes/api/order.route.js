import express from "express";
import OrderController  from "../../controllers/Order.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication";

const router = express.Router();

router.get('/order',tokenAuthentication,OrderController.getOrderByUserId)
router.post('/order',tokenAuthentication,OrderController.createOrder)
// only admin can cancel the order
router.put('/order/accept', tokenAuthentication,OrderController.receiveOrder)
// both admin and client can cancel order
router.put('/order/cancel', tokenAuthentication,OrderController.cancelOrder)
router.get('/order/admin', tokenAuthentication,OrderController.getAll)

export default router