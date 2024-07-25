const Review = require("../models/Review");//referring to the index in models

const resolvers = {
    Query: {
        review: async (parent, args) => {//put in parent and arguments just to have access to context
//context appears to be the only item producing anything in the console log, although we get the result from args?
            const review = await Review.findOne(args);//why can't this take in an id? 
            //can only take the very first entry ever created 
            return review;
          },
    },
    Mutation: { //creates a new Review object with the provided arguments, 
        addReview: async (parent, args) => {
            const newReview = await Review.create(args);
            return newReview;
        } //saves it to the database, and returns the result
    }
    };
 
module.exports = resolvers;
/**
 * const review = await Review.findOne( {_id: args} );
 *  "message": "Cast to ObjectId failed for value \"{}\" (type Object) at path \"_id\" for model \"Review\""
 * const review = await Review.find( args._id );
 * "message": "Cannot return null for non-nullable field Review.description."
 * const review = await Review.findOne( args(+._id) );
 * only returns the first document that matches the query condition.
 * const review = await Review.findOne( { _id: context.authors.reviewId } );
 * Cannot read properties of undefined (reading 'reviewId
 * const review = await Review.findOne( { _id: context.authors._id } );
 * "message": "Cannot read properties of undefined (reading '_id')
 * const review = await Review.findOne( { context } );
 * BSONError: Cannot convert circular structure to BSON
 * const review = await Review.findOne( { parent, args } );
 * {
  "data": {
    "review": null
  }
}
const review = await Review.findOne( { args } );
parent = {} (it's undefined), args = {} - nothing inside
const review = await Review.findOne( args );
{
  "data": {
    "review": {
      "description": "try",
      "authors": null,
      "_id": "66a084318a98442ffb3d67f2",
      "product": "iPhone 7"
    }
  }
} //but this is the only one that appears
 */