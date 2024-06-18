import { useParams } from "react-router-dom"
import { OPTIONS } from "../utils/constant"
import { useEffect, useState } from "react"
import { addMovieImages } from "../store/slices/moviesInfoSlice"
import { addAllImages } from "../store/slices/appSlice"
import { useDispatch, useSelector } from "react-redux"

const useMovieImages = () => {
    const { movie_id, movie_name } = useParams()
    const [imagePath, setImagePath] = useState('')
    const [showImageSlider, setShowImageSlider] = useState(false)
    const dispatch = useDispatch()
    const movieImage = useSelector(store => store.moviesInfo.movieImages)
    const fetchMovieImages = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`, OPTIONS)
        const json = await data.json()
        dispatch(addMovieImages(json))
        dispatch(addAllImages(json))
    }

    // handleShowImage
    const handleShowImage = (path) => {
        setImagePath(path)
        setShowImageSlider(true)
    }
    // handleCloseImage
    const handleCloseImage = () =>{
        setShowImageSlider(false)
    }

    /* eslint-disable*/
    useEffect(() => {
        !movieImage && fetchMovieImages()
        
    }, [])
    /* eslint-enable*/
    return { movieImage, imagePath, movie_id, movie_name, showImageSlider,movie_id, handleShowImage, handleCloseImage }
}
export default useMovieImages