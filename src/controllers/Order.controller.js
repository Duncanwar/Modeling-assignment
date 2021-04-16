import Order from "../services/Order.service";
import UserServices from "../services/User.services";
import OrderStateService from "../services/OrderState.service"
import PaymentService from "../services/Payment.service";
import PaymentStateService from "../services/PaymentState.service";
import CarService from "../services/Car.service"
export default class OrderController {
    
    static async createOrder(req,res){
        try {
            const car = await CarService.findOne(req.body.carId);
            let order = {userId:req.User.id, status:"CREATED", amount:car.price, carId:req.body.carId};
    order =  await Order.create(order)
    const user = await UserServices.getUserByIdOrEmail(req.User.id)
    let orderState = {orderId:order.id, status:"CREATED", actionBy:user.dataValues.fullName}
    orderState = await OrderStateService.create(orderState)
    let payment = {orderId:order.id, status:"UNPAID", amount: order.amount}
    payment = await PaymentService.create(payment)
    let paymentState = {paymentId:payment.id, status:"UNPAID", actionBy:user.dataValues.fullName}
    paymentState = await PaymentStateService.create(paymentState);
    return res.status(201).json({message:"created an order Successfully"})
        } catch (error) {
            return res.status(400).json({error:error})
        } 
    }
    static async getOrderByUserId(req,res){
        const order = await Order.findAllByUser(req.User.id)
        return res.json({order})
    }
    // admin receives an order
    static async receiveOrder(req,res){
        if(req.User.role !== "ADMIN"){
            return res.status(403).json({error:"It is for the admins only"})
        }
        const orderRecieved = await Order.findOne(req.body.orderId);
        if(orderRecieved.status === "CANCEL"){
            return res.status(403).json({error: "It is already canceled"})
        }
        if(orderRecieved.status === "RECEIVED"){
            return res.status(403).json({error: "it is already received"})
        }

        const order = {status:"RECEIVED"}
            await Order.update(order, req.body.orderId)
            const user = await UserServices.getUserByIdOrEmail(req.User.id)
            let orderState = {orderId:req.body.orderId, orderStatus:"RECEIVED", actionBy:user.dataValues.fullName}
            orderState = await OrderStateService.create(orderState)
            return res.status(200).json({message:"Order recieved Successfully"})
    }
    // client and admin can cancel order
    static async cancelOrder(req, res) {
        const order = await Order.findOne(req.body.orderId)
        if(order.status === "CANCEL"){
            return res.status(403).json({error: "It is already canceled"})
        }
        const orderstate = {status:"CANCEL"}
        await Order.update(orderstate, req.body.orderId)
        const user = await UserServices.getUserByIdOrEmail(req.User.id)
        let orderState = {orderId:req.body.orderId, orderStatus:"CANCEL", actionBy:user.dataValues.fullName}
        orderState = await OrderStateService.create(orderState)
        return res.status(200).json({message:"Order canceled"})
    }

    static async getAll(req, res){
        if(req.User.role !== "ADMIN"){
            return res.status(403).json({error:"It is for the admins only"})
        }
        const orders = await Order.findAll()
        return res.json({orders})
    }
}