import models from "../../models/index";

const {PaymentStates} = models;

export default class PaymentStateService{
    static async create(state){
        return PaymentStates.create(state)
    }

    static async findAll(){
        return PaymentStates.findAll();
    }

    static async findOneBy(id){
        return PaymentStates.findOne({where: {id: id}})
    }
    
}