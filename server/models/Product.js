const { Schema, model } = require('mongoose');
//Imports a default image for the product in case no image is provided
const noImage = require('client\src\assets\No_Image_available.jpg');
const userSchema = require('./User');//rename from User to userSchema
//Defines the schema for the product with the following fields:
const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,// JPG is a string? 
      default: noImage,
    },
    price: { //Decimal128 type?
      type: Int,
      required: true,
    }, //references the Model
    seller: [userSchema],
  },
  { 
    toJSON: {
      virtuals: true,
    },//Configures the schema to include 
  } //virtual properties when converted to JSON
);
//Creates a virtual property named "seller" (from the Schema above line 24) on the 
productSchema.virtual('seller').get(function () {//get method defines how the virtual property will be accessed
  return this.seller.username;
});//product schema that retrieves the username of the seller from the seller field

const Product = model('Product', productSchema);

module.exports = Product;