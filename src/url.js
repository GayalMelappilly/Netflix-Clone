import { API_KEY } from "./Constants/constants"

export const originals = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc`
export const now_playing = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const ml_movies = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ml`
export const hi_movies = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2024-01-01&sort_by=revenue.desc&with_original_language=hi`
export const ta_movies = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=ta`


export const github_link = 'https://github.com/GayalMelappilly'
export const instagram_link = 'https://www.instagram.com/__.g_m_s.__/'
export const gmail_link = 'mailto:gayalsunil@gmail.com'
