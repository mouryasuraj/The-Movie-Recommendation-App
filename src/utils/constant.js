// TMDB options secret key
export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_SECRET_KEY
    }
};

// TMDB Now Playing Movies
export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1'

// TMDB popular Movies
export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?page=1'

// TMDB top Rated Movies
export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'

// TMDB Up coming Movies
export const UP_COMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1'

// Banner Backdrop Image
export const TMDB_IMAGE = 'https://image.tmdb.org/t/p/original'

