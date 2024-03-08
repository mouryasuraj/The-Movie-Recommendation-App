import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMovieCredits } from "../store/slices/moviesInfoSlice"
import { useParams } from "react-router-dom"
import { OPTIONS } from "../utils/constant"

const useMovieCredits = () => {
    const credit = useRef();
    const movieCredits = useSelector((store) => store.moviesInfo.movieCredits);
    const { movie_id } = useParams()
    const dispatch = useDispatch()
    /*eslint-disable */
    useEffect(() => {
        fetchMovieCreditInfo()
        return () => dispatch(addMovieCredits(null))
    }, [])
    /*eslint enable */

    const fetchMovieCreditInfo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, OPTIONS)
        const json = await data.json()
        dispatch(addMovieCredits(json))
    }


    const convertToURL = (name) => {
        return name.toLowerCase().replaceAll(" ", "-");
    };

    return { credit, movieCredits, convertToURL }
}
export default useMovieCredits