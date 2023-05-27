import { Request, Response } from 'express';
import loginService from '../services/login.service';
import authToken from '../auth/createToken';
import { UserSequelizeModel } from '../database/models/user.model';

const Userlogin = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await loginService.getByUser(username) as UserSequelizeModel;
  const token = authToken.generateToken({ 
    id: user.dataValues.id, 
    username: user.dataValues.username });
    
  return res.status(200).json({ token });
};

export default {
  Userlogin,
};