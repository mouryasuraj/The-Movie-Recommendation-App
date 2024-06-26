import { useState } from "react";
import { useNavigate } from "react-router-dom";
import modifyURL from "../utils/modifyURL";
const useMovieCard = (movie) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();
    const { poster_path, release_date, id, title } = movie;
    const toURL = `movie/${modifyURL(title)}/${id}`

    const handleMovieCardEnter = () => {
        setShowDetails(true);
    };
    const handleMovieCardLeave = () => {
        setShowDetails(false);
    };
    const handleAddToWatchlist = (e) => {
        alert("This function is not build yet")
        e.stopPropagation();
    };
    const handleGotoMoviesInfo = () => {
        navigate(toURL);
    };

    return { showDetails, title, poster_path, release_date, toURL, handleMovieCardEnter, handleMovieCardLeave, handleAddToWatchlist, handleGotoMoviesInfo }

}
export default useMovieCard;