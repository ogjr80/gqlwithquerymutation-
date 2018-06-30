const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
} = require("graphql");

const Post = require("./Post");
const PostModel = require("../Model/Post");

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Query interface for our blog",
  fields: {
    post: {
      type: Post,
      description: "Query to get a single post",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (_, args) => {
        return PostModel.getPost(args.id);
      }
    },
    posts: {
      type: new GraphQLList(Post),
      description: "Query to get all posts",
      args: {},
      resolve: (_, args) => {
        return PostModel.getPosts();
      }
    }
  }
});

module.exports = Query;
