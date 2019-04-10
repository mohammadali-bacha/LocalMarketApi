/**
 * Productor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", required: true },
    products: { collection: "product", via: "productor" },
    description: { type: "string", },
    image: { type: "string",  },
    location: { type: "string",  },
    user: { model: "user",}
  }
};

