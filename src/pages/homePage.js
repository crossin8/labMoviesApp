import React, { useState, useEffect } from "react"; 
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

const MovieListPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };
  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FilterCard
      onUserInput={handleChange}
      titleFilter={nameFilter}
      genreFilter={genreFilter}
    />
        </Grid>
        <MovieList movies={displayedMovies} />
      </Grid>
    </Grid>
  );
};
export default HomePage;