import { useParams } from "react-router-dom"
import { OPTIONS } from "../utils/constant"
import { useEffect } from "react"
import { addMovieImages } from "../store/slices/moviesInfoSlice"
import { useDispatch, useSelector } from "react-redux"

const useMovieImages = () => {
    const { movie_id } = useParams()
    const dispatch = useDispatch()
    const movieImage = useSelector(store => store.moviesInfo.movieImages)
    const fetchMovieImages = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`, OPTIONS)
        const json = await data.json()
        dispatch(addMovieImages(json))
    }
    /* eslint-disable*/
    useEffect(() => {
        !movieImage && fetchMovieImages()
    }, [])
    /* eslint-enable*/
    return { movieImage }
}
export default useMovieImages