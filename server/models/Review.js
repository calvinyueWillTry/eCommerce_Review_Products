const { Schema, model } = require('mongoose');

const postReviewSchema = new Schema({
    product: { //array was objectifying it
        type: String, 
        required: true 
    },
    authors: { 
        type: String, 
        
    },
    description: { 
        type: String, 
        required: true 
    }
});
const Review = model('Review', postReviewSchema);
module.exports=Review;
/**
 * ,
{
    toJSON: {
      virtuals: true,
    },
  });

postReviewSchema.virtual("fullReview").get(function() {
    return this.authors.join(', ') + ' - ' + this.description;
 */