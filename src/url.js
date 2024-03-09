import { API_KEY } from "./Constants/constants"

export const originals = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc`
export const now_playing = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const ml_movies = `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ml`