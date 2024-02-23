// TMDB options secret key
export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_SECRET_KEY
    }
};

// TMDB Now Playing Movies
export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?page=1'

//Banner Quote
export const QUOTE = 'Movies are not just a form of entertainment; they are a powerful medium that has the ability to inspire, educate, and leave a lasting impact on the audience.'