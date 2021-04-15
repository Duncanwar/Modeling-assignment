import models from "../../models/index";

const {Orders,Users} = models;

export default class OrderService{
    static async create(order){
        return Orders.create(order)
    }
    static async findByOrderByUserId(id){
        return Orders.findOne({where: { userId:id},
        include:[{
            model:Users
        }]})

    }
}