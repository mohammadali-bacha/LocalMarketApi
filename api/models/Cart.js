/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    products: {type: 'string', required: true},
    restaurants: {model: 'restaurant', }, 
    quantities: { type: 'json', columnType: 'array' },
    validate: {type: 'boolean', required: true}
  },

};

