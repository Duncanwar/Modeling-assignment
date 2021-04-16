import express from "express";
import CarController  from "../../controllers/Car.controller";
import tokenAuthentication from "../../middlewares/tokenAuthentication";

const router = express.Router();

router.get('/cars',tokenAuthentication,CarController.getAll)
router.post('/cars',tokenAuthentication,CarController.insert)
router.get('/cars/:id',tokenAuthentication,CarController.getOne)

export default router;
