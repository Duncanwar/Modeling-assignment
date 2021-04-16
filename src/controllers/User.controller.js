import UserService from "../services/User.services.js";
import responses from "../utils/responses.js";
import statusCode from "../utils/statusCode";
import help from "../utils/helpers"

const {
  createUser,
  retrieveUserById,
  getUserByIdOrEmail,
} = UserService;

const { created, ok } = statusCode;
const { successResponse, errorResponse } = responses;

/**
 * @description this controller deals with user services
 */
export default class UserControllers {
  /**
   * @description this controller saves/signup a user in database
   * @param {object} req request
   * @param {object} res response
   * @param {object} next jump to error
   * @return {object} return json object with signup message
   */
  static async signup(req, res, next) {
    try {
      const formData = req.body;
      formData.roleId = 1 ;
      const user = await createUser(formData);
      return successResponse(res, created, undefined,"Signup successfully", user,);
    } catch (e) {
      return next(new Error(e));
    }
  }
  /**
   * @description this controller retrieves a user in database
   * @param {object} req request
   * @param {object} res response
   * @return {object} return json object with signup message
   */
  static async getUserInfo(req, res) {
    const userInfo = await retrieveUserById(req.User.id);
    if (userInfo != null) {
      successResponse(res, ok, undefined,undefined, userInfo);
    } else {
      errorResponse(res, notFound, "userNotFound");
    }
  }

  static async login(req, res) {
    try {
      const { email} = req.body;
      if(!email){
        return res.json(res,401, "email")
      }
      const user = await getUserByIdOrEmail(email);
      if (!user) {
        return res.json({ error: "Email not found" });
      }
      const token = help.generateToken(user);
      return successResponse(res,ok,token,"User logged in successfully", user);
    } catch (err) {
      return res.status(422).json({error:err});
    }
  }
}

