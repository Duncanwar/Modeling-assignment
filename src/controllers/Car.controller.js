import CarService from "../services/Car.service";

export default class CarController {
    static async getAll(req, res) {
       
       const cars = await CarService.findAll();
       return res.json({cars})
    }
    static async getOne(req, res){
        const cars = await CarService.findOne(req.params.id);
        return res.json({cars})
    }

    static async insert(req, res){
        if(req.User.role !== "ADMIN"){
            return res.status(403).json({error:"It is for the admins only"})
        }
        const car = await CarService.create(req.body);
        return res.json({car})
    }
}