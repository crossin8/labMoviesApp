import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getActor} from "../api/tmdb-api";




const Casting = (props) => {
  const [movies, setMovies] = useState([]);
  const actor = movies.getActor;
  
  
  useEffect(() => {
    getActor().then(movies => {
      setMovies(movies);
     }, []);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
 

  return (
    <PageTemplate
      title="Actor in the movie"
      movies={movies}
      selectNew = {soon}
    />
  );
};
export default Casting;