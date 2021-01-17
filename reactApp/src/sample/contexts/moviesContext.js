import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies,getUpcomingMovies, getTopRatedMovies, getPopularMovies} from "../../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
       return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated], popular: [...state.popular]};
    case "load-upcoming":
       return { upcoming: action.payload.upcoming, movies: [...state.movies], topRated: [...state.topRated], popular: [...state.popular]};
    case "load-topRated":
       return { topRated: action.payload.topRated, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular]};
    case "load-popular":
       return { popular: action.payload.popular, movies: [...state.movies], upcoming: [...state.upcoming], topRated: [...state.topRated]};
       default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [],popular: []});
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
    getTopRatedMovies().then(topRated => {
      console.log(topRated);
      dispatch({ type: "load-topRated", payload: {topRated}});
    });
  },[]);

  useEffect(() => {
    getPopularMovies().then(popular => {
      console.log(popular);
      dispatch({ type: "load-popular", payload: {popular}});
    });
  },[]);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        popular: state.popular,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider