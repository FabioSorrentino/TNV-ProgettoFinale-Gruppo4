export interface Rating {
  id: number,
  movie_id: number,
  user_id: number | null,
  movie_rating: number
}
