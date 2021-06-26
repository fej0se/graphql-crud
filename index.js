const { ApolloServer } = require("apollo-server");
const userSchema = require('./api/user/schema/user.graphql')
const UsersAPI = require('./api/user/data/user.data')
const userResolvers = require('./api/user/resolvers/user.resolver')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI()
    }
  }
});

server.listen().then(({url}) => {
  console.log(url)
})