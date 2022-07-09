import { RESTDataSource } from 'apollo-datasource-rest';

export class TrackService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_BASE_URL;
  }

  async getTracks(limit: number = 20, offset: number = 0) {
    const resp = await this.get(`tracks?limit=${limit}&offset=${offset}`);
    resp.items.forEach((i: any) => i.id = i._id);
    return resp.items;
  }
  async getTrack(id: string) {
    const item = await this.get(`tracks/${id}`);
    item.id = item._id;
    return item;
  }
};