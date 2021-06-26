const { RESTDataSource } = require("apollo-datasource-rest");

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  async getUsers() {
    const users = await this.get("/users");
    return users.map(async (user) => ({
      id: user.id,
      nome: user.nome,
      email: user.email,
      ativo: user.ativo,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.role}`);
    return user;
  }

  async createUser(user) {
    const users = await this.get("/users");
    const id = users.length + 1;
    const userCreated = await this.post("/users", {
      id,
      ...user,
    });
    userCreated.role = await this.get(`/roles/${userCreated.role}`);
    return userCreated;
  }

  async changeUser(user) {
    const userModified = await this.put(`/users/${user.id}`, user);
    userModified.role = await this.get(`/roles/${userCreated.role}`);
    return userModified;
  }

  async deleteUser(id) {
    await this.delete(`/users/${id}`);
  }
}

module.exports = UsersAPI;
