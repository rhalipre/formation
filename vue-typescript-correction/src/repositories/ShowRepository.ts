import axios from "axios";
import { Show } from "@/types/Show";


const HTTP = axios.create({
  baseURL: 'http://localhost:4000/rest'
})

export async function fetchShows(): Promise<Show[]> {
  const response = await HTTP.get("/shows");
  return response.data;
}

export async function fetchShowById(showId: number): Promise<Show> {
  const response = await HTTP.get(
    `/shows/${showId}`
  );
  return response.data;
}

export async function setShowFavorite(
  showId: number,
  newFavoriteValue: boolean
): Promise<Show> {
  const response = await HTTP.post(
    `/shows/${showId}/favorites`,
    {
      isFavorite: newFavoriteValue
    }
  );
  return response.data;
}
