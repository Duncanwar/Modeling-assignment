import CarService from "../services/Car.service";

export default class CarController {
    static async getAll(req, res) {
        return await CarService.findAll();
    }
    static async getOne(req, res){
        return await CarService.findOne();
    }
}