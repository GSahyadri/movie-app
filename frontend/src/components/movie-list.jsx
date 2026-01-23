import MovieItem from "./movie-item";

function MovieList(props) {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
