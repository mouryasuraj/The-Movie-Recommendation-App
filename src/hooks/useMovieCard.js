import { useState } from "react";
const useMovieCard = (movie) => {
    const [showDetails, setShowDetails] = useState(false);
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

    return { showDetails, original_title, poster_path, release_date, toURL, handleMovieCardEnter, handleMovieCardLeave }

}
export default useMovieCard;