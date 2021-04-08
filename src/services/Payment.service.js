import models from "../../models/index";

const {Payments} = models;

export default class PaymentService{
    static async create(payment){
        return Payments.create(payment)
    }
}