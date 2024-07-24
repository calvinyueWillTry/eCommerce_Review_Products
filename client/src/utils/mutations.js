import { gql } from '@apollo/client';
/** thrown this in  */
export const ADD_REVIEW = gql`
  mutation AddReview($product: String!, $description: String!, $authors: String!) {
    addReview(product: $product, description: $description, authors: $authors) {
      authors
      description
      product
    }
  }`