import models from "../../models/index";

const {OrderStates} = models;

export default class OrderStateService{
    static async create(order){
        return OrderStates.create(order)
    }
    static async findAll(){
        return await OrderStates.findAll();
    }
}