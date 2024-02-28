import { get } from "../data/httpClient"
import {useEffect,useState} from "react"
import { useParams} from "react-router-dom"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"
export function MovieDetails(){
    const {movieid} = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    
    useEffect(()=>{
        get("/movie/"+ movieid).then((data)=>{
            setMovie(data);
            setGeneros(data.genres[0])
            console.log(data.genres[0])
        })
    },[movieid]);

    const imageUrl = getMovieImg(movie.poster_path,500); 
   
    return(
        <div className="datailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage"/>
            <div className="col movieDetails">
                <p className="title">
                    <strong>Título:</strong> {movie.title}
                </p>


                <p>
                   <strong>Género:</strong> {generos.name}
                </p>


                <p>
                   <strong> Descripcion:</strong> {movie.overview}
                </p>

            </div>
        </div>
    );
}