import helper from '../utils/helpers.js';
import userService from '../services/User.services';
import responses from '../utils/responses.js';

const { verifyToken } = helper;
const { getUserByIdOrEmail } = userService;

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return responses.successResponse(res,401,undefined,"You must be logged in")
  }
  const token = authorization.replace('Bearer ', '');
  const payload = verifyToken(token);
  const { id } = payload;
  const role = await  getUserByIdOrEmail(id);
  const {dataValues} = role.dataValues.role
  req.User = payload;
  req.User.role = dataValues.roleName;
  return next();
};
