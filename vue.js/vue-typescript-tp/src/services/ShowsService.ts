import { ShowI } from "@/types/ShowI";
import axios from "axios";

class ShowsService {
  HTTP = axios.create({
    baseURL: "http://localhost:4000/rest"
  });
  
  async getAll(): Promise<ShowI[]> {
    const response = await this.HTTP.get("/shows");
    return response.data;
  }

  async findShowById(showId: number): Promise<ShowI[]> {
    const response = await this.HTTP.get(`/shows/${showId}`);
    return [response.data];
  }

  async setFavoriteForShow(showId: number, isFavorite: boolean, findBy?: boolean): Promise<void> {
    await this.HTTP.post(`/shows/${showId}/favorites`, {isFavorite: isFavorite});
  }
}

export default new ShowsService();
