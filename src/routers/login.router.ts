import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidations from '../middleware/loginValidation';

const loginRouter = Router();

loginRouter.post(
  '/login', 
  loginValidations.validateLogin, 
  loginValidations.validateUser, 
  loginController.Userlogin,
);

export default loginRouter;
