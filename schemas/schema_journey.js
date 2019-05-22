"use strict";

const Joi = require("joi");

const schemaLogin = Joi.object({
    account_active: Joi.boolean().required(),
    type: Joi.string().required(),
    year_creation: Joi.number().required().options({
      convert: false
    }),
});

const schemaArrayClients = Joi.object({
  id: Joi.number().required().options({
    convert: false
  }),
  name: Joi.string().required(), 
  age: Joi.number().required().options({
    convert: false  
  }),
});

const schemaClients = Joi.object({
  clients: Joi.array().items(schemaArrayClients),
  timestamp: Joi.string().optional(), 
  page: Joi.number().required().optional({
      convert: false
  }
  ),
});

const schemaObjPhone = Joi.object({
  type: Joi.string().optional(),
  number: Joi.number().required().required({
    convert: false
  }),
});

const schemaDetails = Joi.object({
  id: Joi.number().required().optional({
    convert: false
  }),
  name: Joi.string().optional(),
  age: Joi.number().required().required({
    convert: false
  }),
  email: Joi.string().optional(),
  is_active: Joi.boolean().required(),
  phone: schemaObjPhone,
  debit_alert: Joi.boolean().allow(null).optional(),
});

module.exports = {
    schemaLogin,
    schemaClients,
    schemaDetails,
};