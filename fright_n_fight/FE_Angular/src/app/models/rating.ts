export interface Rating_NewEntry {
  movie_id: number | null,
  user_id: number | null,
  movie_rating: number
}

export interface Rating {
  id: number,
  user_id: number,
  movie_id: number,
  movie_rating: number
}

export interface Data {
  data: Rating[];
}

export interface RatingsApiResponse {
  Ratings: Rating[];
  ResponseStatus: number;
}