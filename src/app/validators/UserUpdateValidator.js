import { celebrate, Segments, Joi } from 'celebrate';

const userUpdateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.required(),
    newPassword: Joi.required(),
  }),
});

export default userUpdateValidator;
