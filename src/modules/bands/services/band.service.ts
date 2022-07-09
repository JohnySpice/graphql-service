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
    for (const item of resp.items) {
      item.genres = await this.getGenres(item.genresIds, genreService);
    }
    return resp.items;
  }
  async getBand(id: string) {
    const item = await this.get(`bands/${id}`);
    item.id = item._id;
    return item;
  }

  async getGenres(genresIds: [string], genreService: GenreService) {
    const genres = await genreService.getGenres();
    const neededGenres = genres.filter((g: any) => genresIds.includes(g._id));
    return neededGenres;
  }

};