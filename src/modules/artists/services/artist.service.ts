import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_BASE_URL;
  }

  async getArtists(limit: number = 20, offset: number = 0) {
    const resp = await this.get(`artists?limit=${limit}&offset=${offset}`);
    resp.items.forEach((i: any) => i.id = i._id);
    return resp.items;
  }
  async getArtist(id: string) {
    const item = await this.get(`artists/${id}`);
    item.id = item._id;
    return item;
  }

  async createArtist(data: any, token: string) {
    const artist = await this.post(`artists`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    artist.id = artist._id;
    return artist;
  }

  async deleteArtist(id: string, token: string) {
    const result = await this.delete(`artists/${id}`, undefined,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    return result;
  }

  async updateArtist(id: string, data: any, token: string) {
    const artist = await this.put(`artists/${id}`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    artist.id = artist._id;
    return artist;
  }
};