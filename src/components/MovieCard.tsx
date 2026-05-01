import { Card } from "@/components/ui/card";
import type { MovieSingle } from "../types"
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500";
import netflixLogo from '../assets/netflix-logo.png';
import { useNavigate } from "@tanstack/react-router";

const MovieCard = ({ movie }: MovieSingle) => {

    const navigate = useNavigate()

    function navigateClick(title: any) {
        navigate({
            to: '/watch/$trackId', 
            params: {trackId: title}
        })
    }

    return(
        <button 
            className="w-38.5"
            onClick={() => navigateClick(movie?.title)}>
            <Card 
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 mx-[8px] border-0 w-[9.0rem] h-[12.3rem] rounded-sm">
                <img src={netflixLogo} alt="" className="w-6.5 translate-y-1.5 translate-x-1.5 absolute z-11 opacity-[0.8]" />
                <img 
                    src={movie?.poster_path 
                        ? TMDB_IMAGES_ASSET_URL + movie.poster_path 
                        : ""} 
                    alt={movie?.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10" 
                />
                {movie?.title}
            </Card>
        </button>
    )
}

export default MovieCard