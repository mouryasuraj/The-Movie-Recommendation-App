import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useMovieCard = (movie) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();
    const { original_title, poster_path, release_date, id, title } = movie;
    const toURL = `${title
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .replace(/\s+/g, "-")}/${id}`

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

    return { showDetails, original_title, poster_path, release_date, toURL, handleMovieCardEnter, handleMovieCardLeave, handleAddToWatchlist, handleGotoMoviesInfo }

}
export default useMovieCard;