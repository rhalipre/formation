export interface ShowI {
  id: number;
  title: string;
  description: string;
  createdIn: string;
  numberOfSeasons: number;
  status: string;
  image: string;
  genres: readonly string[];
  isFavorite: boolean;
}
