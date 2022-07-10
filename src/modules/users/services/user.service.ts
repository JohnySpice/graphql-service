import { RESTDataSource } from 'apollo-datasource-rest';

export class UserService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_BASE_URL;
  }

  async getUser(id: string) {
    const item = await this.get(`users/${id}`);
    item.id = item._id;
    return item;
  }

  async login(email: string, password: string) {
    const item = await this.post(`users/login`, { email, password });
    return item.jwt;
  }

  async register(data: any) {
    const user = await this.post(`users/register`, data);
    user.id = user._id;
    return user;
  }
};