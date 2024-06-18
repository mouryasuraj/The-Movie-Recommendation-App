
import { OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovieDetails, addMovieVideos, addMovieImages } from "../store/slices/moviesInfoSlice";

const useMovieInfo = () => {
    const { movie_id } = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(store => store.moviesInfo.movieDetails)
    const isMobile = window.innerWidth < 768;

    /*eslint-disable */
    useEffect(() => {
        fetchMovieDetails();
        window.scrollTo(0, 0)
        return () => {
            dispatch(addMovieDetails(null))
            dispatch(addMovieVideos(null))
            dispatch(addMovieImages(null))
        }
    }, []);
    /*eslint-enable */

    // fetchMovieDetails
    const fetchMovieDetails = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
            OPTIONS
        );
        const json = await data.json();
        dispatch(addMovieDetails(json))
    };

    return { isMobile, movieDetails, movie_id }
}

export default useMovieInfo;