// Model That defines our user model
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from product
const productSchema = require('./Product')
//Defines the schema for the user with the following fields:
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address.'],
    },
    shippingAddress: {
      type: String,
      required: true,
      unique: true,
    },

    productsForSale: [productSchema],
  },
  // set this to use virtual below
  { 
    toJSON: {
      virtuals: true,
    }, //Configures the schema to 
  } //include virtual properties when converted to JSON
);

// Encrypt plain text password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
//encrypts the user's password before saving it to the database using bcrypt
  next();
});

// Custom method, validates if the target password matches the encrypted version in the db
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}; //compare the provided password with the encrypted password stored in the database using bcrypt

// Returns a field with the products this user has for sale
// //NOT WORKING!////
//Creates a virtual property named 'productsForSale' on the user schema
userSchema.virtual('productsForSale').get(function () { //gets the calculation
  const productsForSale = { //of the number of listings
    numOfListings : this.productsForSale.length, //# of entries
    Listings : this.productsForSale, //whatever is produced within this function, which is numOfListings
  }; //returns the array of products for sale
  return productsForSale;
});

const User = model('User', userSchema);

module.exports = User;
