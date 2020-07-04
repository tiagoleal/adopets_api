import { celebrate, Segments, Joi } from 'celebrate';

const userCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.required(),
  }),
});

export default userCreateValidator;
