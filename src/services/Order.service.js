import models from "../../models/index";

const {Orders} = models;

export default class OrderService{
    static async create(order){
        return Orders.create(order)
    }
}