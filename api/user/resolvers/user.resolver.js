const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) =>
      dataSources.usersAPI.getUserById(id),
  },
  Mutation: {
    adduser: async (root, user, { dataSources }) =>
      dataSources.usersAPI.createUser(user),
    changeuser: async (root, user, { dataSources }) =>
      dataSources.usersAPI.changeUser(user),
    deleteuser: async (root, { id }, { dataSources }) =>
      dataSources.usersAPI.deleteUser(id),
  },
};

module.exports = userResolvers;
