const Review = require("../models/Review");

const resolvers = {
    Query: {
        review: async (parent, args) => {
            const review = await Review.findOne(args);
            return review;
          },
    },
    Mutation: { 
        addReview: async (parent, args) => {
            const newReview = await Review.create(args);
            return newReview;
        } 
    }
    };
 
module.exports = resolvers;
