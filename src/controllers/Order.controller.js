import Order from "../services/Order.service";
import UserServices from "../services/User.services";
import OrderStateService from "../services/OrderState.service"
import PaymentService from "../services/Payment.service";
import PaymentStateService from "../services/PaymentState.service";

export default class OrderController {
    static async createOrder(req,res){
        try {
            let order = {userId:req.User.id, status:"CREATED", amount:req.body.amount, carId:req.body.carId};
            console.log(order);
    order =  await Order.create(order)
    const user = await UserServices.getUserByIdOrEmail(req.User.id)
    let orderState = {orderId:order.id, status:"CREATED", actionBy:user.dataValues.fullName}
    orderState = await OrderStateService.create(orderState)
    let payment = {orderId:order.id, status:"UNPAID", amount: req.body.amount}
    payment = await PaymentService.create(payment)
    let paymentState = {paymentId:payment.id, status:"UNPAID", actionBy:user.dataValues.fullName}
    paymentState = await PaymentStateService.create(paymentState);
    return res.status(201).json({order,orderState,payment,paymentState})
        } catch (error) {
            return res.status(400).json({error:error})
        } 
    }
    static async getOrderByUserId(req,res){
        const order = await Order.findAllByUser(req.User.id)
        return res.json({order})
    }
    static async receiveOrder(req,res){
        if(req.User.role !== "ADMIN"){
            return res.status(403).json({error:"It is for the admin only"})
        }
        const orderRecieved = await Order.findOne(req.body.orderId);
        if(orderRecieved.status === "CANCEL"){
            return res.status(403).json({error: "It is already canceled"})
        }
        if(orderRecieved.status === "RECEIVED"){
            return res.status(403).json({error: "it is already received"})
        }

        const order = {status:"RECEIVED"}
            const update = await Order.update(order, req.body.orderId)
            const user = await UserServices.getUserByIdOrEmail(req.User.id)
            let orderState = {orderId:req.body.orderId, orderStatus:"RECEIVED", actionBy:user.dataValues.fullName}
            orderState = await OrderStateService.create(orderState)
            return res.status(200).json({update,orderState})
    }
    static async cancelOrder(req, res) {
        const order = await Order.findOne(req.body.orderId)
        if(order.status === "CANCEL"){
            return res.status(403).json({error: "It is already canceled"})
        }
        const orderstate = {status:"CANCEL"}
        const update = await Order.update(orderstate, req.body.orderId)
        const user = await UserServices.getUserByIdOrEmail(req.User.id)
        let orderState = {orderId:req.body.orderId, orderStatus:"CANCEL", actionBy:user.dataValues.fullName}
        orderState = await OrderStateService.create(orderState)
        return res.status(200).json({update,orderState})
    }
}