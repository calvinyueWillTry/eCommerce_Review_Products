const { Schema, model } = require('mongoose');

const postReviewSchema = new Schema({
    product: { 
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
