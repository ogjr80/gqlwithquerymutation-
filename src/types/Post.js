const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType
} = require("graphql");

const Post = new GraphQLObjectType({
  name: "Post",
  description: "Post type definition",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the Post"
      // resolve: post => post.id
    },
    title: {
      type: GraphQLString,
      title: GraphQLString,
      description: "Title of the Post"
      // resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      content: GraphQLString,
      description: "content of the Post"
      // resolve: post => post.content
    }
  }
});

module.exports = Post;
