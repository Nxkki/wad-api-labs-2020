import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies,getUpcomingMovies } from "../../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
       return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated]};
    case "load-upcoming":
       return { upcoming: action.payload.upcoming, movies: [...state.movies], topRated: [...state.topRated]};
    case "load-topRated":
       return { topRated: action.payload.topRated, movies: [...state.movies], upcoming: [...state.upcoming]};
      
      default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(upcoming => {
      console.log(upcoming);
      dispatch({ type: "load-upcoming", payload: {upcoming}});
    });
  },[]);
  useEffect(() => {
    getUpcomingMovies().then(topRated => {
      console.log(topRated);
      dispatch({ type: "load-topRated", payload: {topRated}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider