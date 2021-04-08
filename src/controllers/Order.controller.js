import Order from "../services/Order.service";
import UserServices from "../services/User.services";
import OrderStateService from "../services/OrderState.service"
import PaymentService from "../services/Payment.service";
import PaymentStateService from "../services/PaymentState.service";

export default class OrderController {
    static async createOrder(req,res){
    let order = {userId:req.User.id, status:"CREATED", carId:req.body.carId};
    order =  await Order.create(order)
    const user = await UserServices.getUserByIdOrEmail(req.User.id)
    let orderState = {orderId:order.id, status:"CREATED", actionBy:user.dataValues.fullName}
    orderState = await OrderStateService.create(orderState)
    let payment = {orderId:order.id, status:"UNPAID"}
    payment = await PaymentService.create(payment)
    let paymentState = {paymentId:payment.id, status:"UNPAID", actionBy:user.dataValues.fullName}
    paymentState = await PaymentStateService.create(paymentState);
    return res.status(201).json({order,orderState,payment,paymentState})
    }
}