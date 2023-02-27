import  {useEffect,useState} from 'react';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// connecting to external API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=977cec9d";

const App = () => {
    // create a hook to manage the movies state
    const [movies, setMovies] = useState([]);

    //create another hook to manage searchTerm state
    const [searchTerm, setSearchTerm] = useState("");

    // declare the search parameter for movie title
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        //console.log(data.Search);
        //assigned the data.seearch to the setMovies
        setMovies(data.Search);
    }

    useEffect(()=>{
            searchMovie("Spiderman");
             }, []
    );


    return (
        <div className='app'>
            <h1>MovieLand</h1> 

            <div className='search'>
            <input 
                placeholder='search for movies'
                value={searchTerm}
                onChange={(e)=>{ setSearchTerm(e.target.value)}}
            />
            <img src={SearchIcon} alt="Search movies" 
                 onClick={()=>{setMovies(searchTerm)}}/>
            </div>
            {
                movies.length > 0 ?
                (
                    <div className='container'>
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h1>No movie found</h1>
                    </div>
                )
                
            }
            
        </div>
    );
}

export default App;