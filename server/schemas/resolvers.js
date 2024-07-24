const Review = require("../models/Review");//just models?

const resolvers = {
    Query: {
        review: async (parent, args) => {//put in parent and arguments just to have access to context
            
            const review = await Review.findOne( args );
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
 * Review: {
        authors: async (parent, args, context) => {
            if (parent.authors) { //fetches and finds the authors field for that Review object
                const reviewData = await Review.findOne({ _id: parent.authors._id }).select("authors");
                return reviewData.authors;
            } else {
                console.log("error in resolvers");
            }
        },//returns the description field of the Review object
        description: async (parent) => {
            return parent.description;
        }
    },
    Mutation: { //creates a new Review object with the provided arguments, 
        addReview: async (parent, args) => {
            const newReview = new Review(args);
            const result = await newReview.save();
            return result;
        } //saves it to the database, and returns the result
    }
 */
/** 
 * // Query: {
    //     review: async (parent, args, context) => {
    //         // Check if there is a user authenticated
    //         if (!context.user) {
    //             throw new Error('You are not authenticated.');
    //         }

    //         try {
    //             // Fetch the user details based on the authenticated user's ID
    //             const user = await User.findById(context.user.id);
    //             return user;
    //         } catch (error) {
    //             console.error(error);
    //             throw new Error('Failed to fetch user details.');
    //         }
    //     }
    // },
 */