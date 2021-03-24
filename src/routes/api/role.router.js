import express from "express";
import RoleController from "../../controllers/Role.controller";

const router = express.Router()

const {getRoles, createRole, updateRole, deleteRole} = RoleController

router.get('/roles', getRoles)
router.post('/roles', createRole)
router.patch('/roles/:id', updateRole)
router.delete("/roles/:id", deleteRole)

export default router;