import models from "../../models/index";

const {Payments, Orders} = models;

export default class PaymentService{
    static async create(payment){
        return Payments.create(payment)
    }
    static async findAll(){
        return Payments.findAll();
    }
    static async findOneByOrderId(id){
        return await Payments.findOne({where: {orderId:id},
        include:[{
            model: Orders
        }]
        })
    }
    static async update(data, id){
        return await Payments.update(data,{where:{orderId:id}})
    }
}