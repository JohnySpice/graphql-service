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
};