import { celebrate, Segments, Joi } from 'celebrate';

const sessionValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.required(),
  }),
});

export default sessionValidator;
