import RoleService from "../services/Roles.services"

const {create, findAll, update, remove } = RoleService;
export default class RoleController{

  static async  getRoles (req,res){
const roles = await findAll();
return res.json(roles)
    }

    static async createRole(req,res){
      const roles = await create(req.body)
      return res.json(roles)
    }

    static async updateRole(req,res){
      const {id} = req.params
      const roles = await update(id, req.body)
      return res.json(roles)
    }

    static async deleteRole(req,res){
      const {id} = req.params
      const roles = await remove(id) 
      return res.json(roles)
    }
}