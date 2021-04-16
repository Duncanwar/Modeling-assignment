import express from "express";
import PaymentController  from "../../controllers/Payment.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication"

const router = express.Router();

router.post('/payment',tokenAuthentication,PaymentController.pay);
router.get('/payment/:id',tokenAuthentication,PaymentController.getOne);
router.get('/payment', tokenAuthentication,PaymentController.getAll);


export default router;
