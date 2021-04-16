import models from "../../models/index";

const {Orders,Users, Cars} = models;

const exclude =  { exclude: "updatedAt"  }
export default class OrderService{
    static async create(order){
        return Orders.create(order)
    }
    static async findByOrderByUserId(id){
        return Orders.findOne({where: { userId:id},
        include:[{
            model:Users,  
        },{model:Cars}]})

    }
    static async findAllByUser(id){
        return await Orders.findAll({where: { userId:id}});
    }
    static async update(data,id){
        return await Orders.update(data,{where: {id:id}})
    }
    static async findOne(id){
        return await Orders.findOne({where: {id:id}})
    }
}