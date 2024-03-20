import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideos } from "../store/slices/moviesInfoSlice";

const useMovieVideos = (videoPlayer) => {
    const dispatch = useDispatch()
    const [videoKey, setVideoKey] = useState("");
    const movieVideos = useSelector(store => store.moviesInfo.movieVideos)
    const { movie_id } = useParams()
    const fetchMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, OPTIONS)
        const json = await data.json()
        dispatch(addMovieVideos(json.results))
    }
    const handleCloseVideo = () => {
        setVideoKey("");
        videoPlayer.current.style.display = "none";
    };

    const playVideo = (key) => {
        setVideoKey(key);
        videoPlayer.current.style.display = "flex";
    };

    /*eslint-disable */
    useEffect(() => {
        !movieVideos && fetchMovieVideos()
    }, [])
    /*eslint-enable */
    return { movieVideos, videoKey, handleCloseVideo, playVideo }
}

export default useMovieVideos;