import models from "../../models/index";

const {Cars} = models;

export default class CarService {
    static async findAll(){
        return await Cars.findAll();
    }
    static async create(car) {
        return await Cars.create(car);
    }
}
