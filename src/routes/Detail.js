import { useQuery } from "react-query";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchDetailMovies } from "../api";

function Detail() {
    const { id } = useParams();
    const { isLoading, data } = useQuery(["movie", id], () => fetchDetailMovies(id));
    return (
        <div>
            {isLoading ? "Loading..." : (
                <div>
                    <h1>{data.title}</h1>
                    <img src={data.medium_cover_image} alt={data.title} />
                </div>
            )}
        </div>
    )
}

export default Detail;