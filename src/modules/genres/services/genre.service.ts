import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_BASE_URL;
  }

  async getGenres(limit: number = 20, offset: number = 0) {
    const resp = await this.get(`genres?limit=${limit}&offset=${offset}`);
    resp.items.forEach((i: any) => i.id = i._id);
    return resp.items;
  }

  async getGenre(id: string) {
    const item = await this.get(`genres/${id}`);
    item.id = item._id;
    return item;
  }

  async createGenre(data: any, token: string) {
    const genre = await this.post(`genres`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    genre.id = genre._id;
    return genre;
  }

  async deleteGenre(id: string, token: string) {
    const result = await this.delete(`genres/${id}`, undefined,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    return result;
  }

  async updateGenre(id: string, data: any, token: string) {
    const genre = await this.put(`genres/${id}`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    genre.id = genre._id;
    return genre;
  }
};