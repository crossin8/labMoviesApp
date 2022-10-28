import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovie } from "../api/tmdb-api";




const Upcoming = (props) => {
  const [movies, setMovies] = useState([]);
  const date = new Date('28-10-2022');
  
  const newMovie = movies.filter((f) =>f.Upcoming);
  localStorage.setItem("Upcoming", JSON.stringify(newMovie));

  const soon = (movies) =>{
    const updateNew = movies.map((f)=>
    date.getTime() < f.release_date.getTime() ? {...f, newMovie: true} : f
    );
    setMovies(updateNew);
  }
  useEffect(() => {
    getUpcomingMovie().then(movies => {
      setMovies(movies);
     }, []);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      selectNew = {soon}
    />
  );
};
export default Upcoming;