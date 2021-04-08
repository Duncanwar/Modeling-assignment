/* eslint-disable require-jsdoc */
import models from "../../models/index";

const { Roles } = models;

export default class RoleService {
  static async create(role) {
    return await Roles.create(role);
  }

  static async findAll() {
    return await Roles.findAll();
  }

  static async update(id, data) {
    const user = await Roles.update(data, { where: { id } });
    console.log(user);

    return user;
  }

  static async remove(id) {
    return await Roles.destroy({ where: { id } });
  }

  static async findById(id) {
    return await Roles.findOne({ where: { id } });
  }

  // eslint-disable-next-line require-jsdoc
  static async findByName(name) {
    return await Roles.findOne({ where: { roleName: name } });
  }
}
