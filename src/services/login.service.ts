import UserModel, { UserSequelizeModel } from '../database/models/user.model';

const getByUser = async (username: string):Promise< UserSequelizeModel | null> => 
  UserModel.findOne({ where: { username } });

export default {
  getByUser,
};