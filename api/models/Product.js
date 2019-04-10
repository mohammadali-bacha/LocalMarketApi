/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type: 'string', },
    productor: {model: 'productor', },
    type: {model: 'type', },
    price: {type: 'float', required: true},
    quantity: {type: 'float', required: true},
    metrics: {type: 'string', required: true},
  },

};

