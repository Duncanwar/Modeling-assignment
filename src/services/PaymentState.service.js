import models from "../../models/index";

const {PaymentStates} = models;

export default class PaymentStateService{
    static async create(state){
        return PaymentStates.create(state)
    }
}