// TMDB secret key
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + import.meta.VITE_TMDB_SECRET_KEY
    }
};
