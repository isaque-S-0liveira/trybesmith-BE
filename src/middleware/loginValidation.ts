import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import validationLogin from '../Joi/loginSchemas';
import loginService from '../services/login.service';

const validateLogin = async (req: Request, res: Response, next: NextFunction): 
Promise<Response | undefined> => {
  const { username, password } = req.body;
  const { error } = validationLogin.validate({ username, password });

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const validateUser = async (req: Request, res: Response, next: NextFunction): 
Promise<Response | undefined> => {
  const { username, password } = req.body;
  const user = await loginService.getByUser(username);
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

export default { validateLogin, validateUser };
