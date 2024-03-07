import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMovieCredits } from "../store/slices/moviesInfoSlice"
import { useParams } from "react-router-dom"
import { OPTIONS } from "../utils/constant"

const useMovieCredits = () => {
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
}
export default useMovieCredits