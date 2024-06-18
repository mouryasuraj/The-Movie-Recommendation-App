// TMDB options secret key
export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_SECRET_KEY
    }
};

// TMDB Now Playing Movies
export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?region=IN&page=1'

// TMDB popular Movies
export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?region=IN&page=1'

// TMDB top Rated Movies
export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'

// TMDB Up coming Movies
export const UP_COMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?region=IN&page=1'

// Banner Backdrop Image
export const TMDB_IMAGE = 'https://image.tmdb.org/t/p/original'


// MoviesInfo
// Movie Cast Profile URL
export const CAST_PROFILE_URL = 'https://media.themoviedb.org/t/p/w138_and_h175_face'
export const MALE_PROFILE_URL = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
export const FEMALE_PROFILE_URL = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg'

// Constant Variable
export const posterAltName = 'Poster Path'