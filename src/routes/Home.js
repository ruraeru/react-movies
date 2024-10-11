import { useQuery } from "react-query";
import { fetchMovies } from "../api";
import Movie from "../components/Movie";


function Home() {
    const { isLoading, data } = useQuery("Movies", fetchMovies);
    console.log(data)
    return (
        <div>
            {isLoading ? <h1>Loading...</h1> :
                (
                    <div>
                        {data.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                summary={movie.summary}
                                coverImg={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
}

export default Home;