export async function fetchMovies() {
    return fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`).then(res => res.json()).then(json => json.data.movies);
}

export async function fetchDetailMovies(movieId) {
    return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`).then(res => res.json()).then(json => json.data.movie);
}