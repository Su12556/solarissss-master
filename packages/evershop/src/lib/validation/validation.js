const Joi = require('joi');

const addressSchema = Joi.object({
  full_name: Joi.string().required(),
  telephone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  address: Joi.string().required(),
  city: Joi.string().min(1).required(),
  country: Joi.string().valid('INDIA', 'US', 'CA', 'Other').required(),
  province: Joi.string().allow(null, ''),
  post_code: Joi.string().pattern(/^[0-9]{5,6}$/).required()
});

module.exports = { addressSchema };
