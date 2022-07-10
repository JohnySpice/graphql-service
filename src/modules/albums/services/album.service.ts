import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_BASE_URL;
  }

  async getAlbums(limit: number = 20, offset: number = 0) {
    const resp = await this.get(`albums?limit=${limit}&offset=${offset}`);
    resp.items.forEach((i: any) => i.id = i._id);
    return resp.items;
  }

  async getAlbum(id: string) {
    const item = await this.get(`albums/${id}`);
    item.id = item._id;
    return item;
  }

  async createAlbum(data: any, token: string) {
    const album = await this.post(`albums`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    album.id = album._id;
    return album;
  }

  async deleteAlbum(id: string, token: string) {
    const album = await this.delete(`albums/${id}`, undefined,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    return album;
  }

  async updateAlbum(id: string, data: any, token: string) {
    const album = await this.put(`albums/${id}`, data,
      {
        headers: {
          Authorization: `${token}`
        }
      });
    album.id = album._id;
    return album;
  }
};