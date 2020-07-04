import { celebrate, Segments, Joi } from 'celebrate';

const productCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3),
    description: Joi.string().required(),
    category_id: Joi.number().required().min(1),
    price: Joi.number().required(),
    stock: Joi.number().required(),
  }),
});

export default productCreateValidator;
