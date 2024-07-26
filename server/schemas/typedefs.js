const typeDefs = `
type Query {
  review: Review
}
type Review {
  _id: ID
  product: String!
  authors: String
  description: String!
}
type Mutation {
  addReview(product: String!, authors: String, description: String!): Review
}
`;
module.exports = typeDefs;
