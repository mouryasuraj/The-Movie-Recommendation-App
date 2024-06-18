import { useSelector } from "react-redux"
import { TMDB_IMAGE } from "../utils/constant";


const AllImages = () => {
    const allImages = useSelector(store => store.app.allImages)
    if(!allImages) return <p className="pt-32">Loading.....</p>

  return (
    <div className="pt-32">
      <img src={ TMDB_IMAGE + allImages.backdrops[0].file_path} alt="" />
    </div>
  )
}

export default AllImages
