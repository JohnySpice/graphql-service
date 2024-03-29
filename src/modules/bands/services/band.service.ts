import { RESTDataSource } from 'apollo-datasource-rest';
import { GenreService } from '../../genres/services/genre.service';

export class BandService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_BASE_URL;
  }

  async getBands(limit: number = 20, offset: number = 0, genreService: GenreService) {
    const resp = await this.get(`bands?limit=${limit}&offset=${offset}`);
    resp.items.forEach((i: any) => i.id = i._id);
    return resp.items;
  }

  async getBand(id: string) {
    const item = await this.get(`bands/${id}`);
    item.id = item._id;
    return item;
  }

  async createBand(data: any, token: string) {
    const band = await this.post(`bands`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    band.id = band._id;
    return band;
  }

  async deleteBand(id: string, token: string) {
    const result = await this.delete(`bands/${id}`, undefined,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    return result;
  }

  async updateBand(id: string, data: any, token: string) {
    const band = await this.put(`bands/${id}`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    band.id = band._id;
    return band;
  }
};