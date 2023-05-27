import Joi from 'joi';

const validationLogin = Joi.object({
    
  username: Joi.string().required(),
  password: Joi.string().required(),
      
}).messages({
  'any.required': '"username" and "password" are required',
  'string.empty': '"username" and "password" are required',
});

export default validationLogin;