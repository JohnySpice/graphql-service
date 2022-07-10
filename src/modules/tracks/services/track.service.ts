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

  async createTrack(data: any, token: string) {
    const tracks = await this.post(`tracks`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    tracks.id = tracks._id;
    return tracks;
  }

  async deleteTrack(id: string, token: string) {
    const result = await this.delete(`tracks/${id}`, undefined,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    return result;
  }

  async updateTrack(id: string, data: any, token: string) {
    const tracks = await this.put(`tracks/${id}`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    tracks.id = tracks._id;
    return tracks;
  }
};