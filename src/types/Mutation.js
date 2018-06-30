const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
} = require("graphql");

const Post = require("./Post");
const PostModel = require("../Model/Post");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Query interface for our blog",
  fields: {
    createPost: {
      type: Post,
      args: {
        title: {
          type: GraphQLString,
          description: "Title of the Post"
        },
        content: {
          type: GraphQLString,
          description: "Content of the Post"
        }
      },
      resolve: (_, args) => {
        return PostModel.createPost({
          title: args.title,
          content: args.content
        });
      }
    }
  }
});

module.exports = Mutation;
