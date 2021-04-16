import OrderService from "../services/Order.service";
import PaymentService from "../services/Payment.service";
import PaymentStateService from "../services/PaymentState.service";
import UserServices from "../services/User.services";

export default class PaymentController {
    static async pay(req, res) {
        const {orderId, amount} = req.body
        const order = await OrderService.findOne(orderId)
        if(order.userId !== req.User.id){
            return res.status(403).json({error:"You can not pay an order which is not yours"})
        }
        let payment = await PaymentService.findOneByOrderId(orderId)
        if(payment.status === "FULLYPAID"){
            return res.status(401).json({error: "Already Payed"});
        }
        if(order.status === "CANCEL"){
            return res.status(403).json({error: "You can not pay cancel order",order})
        }
        if(order.status === "CREATED"){
            return res.status(403).json({error: "Wait for your order to be received "})
    }
    if(order.amount !== amount){
        return res.status(401).json({error: `You must pay the full amount ${order.amount}`})
    }
    
    let payments = {status:"FULLYPAID", amount: amount}

    payments = await PaymentService.update(payments, orderId)
    const user = await UserServices.getUserByIdOrEmail(req.User.id)
    let paymentState = {paymentId:order.id, paymentStatus:"FULLYPAID", actionBy:user.dataValues.fullName}
    paymentState = await PaymentStateService.create(paymentState);
    return res.status(200).json({message:"payments successfully done", payments,paymentState});
}
static async getOne(req,res){
    
}
}