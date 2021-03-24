import express from "express";
import dotenv from "dotenv";
import roles from "./api/role.router"

dotenv.config();

const router = express.Router();
const apiVersion = process.env.API_VERSION;
const baseUrl = `/api/${apiVersion}`

router.get('/api/',(req, res) =>{res.json({mes:"api"})})

router.use(baseUrl, roles);

export default router;
