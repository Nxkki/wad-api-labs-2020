import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          
         
          
        </div>
              </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};
  export default withRouter(MoviePage);


// // import React, {useState, useEffect}  from "react";
// // // import React from "react";
// // import MovieHeader from "../components/headerMovie";
// // import MovieDetails from "../components/movieDetails";
// // import "./moviePage.css";
// // import {getMovie} from '../api/tmdb-api'


// // const MoviePage = props => {
// //   const { id } = props.match.params
// //   const [movie, setMovie] = useState(null)
// //   useEffect(() => {
// //     getMovie(id).then(movie => {
// //       setMovie(movie);
// //     });
// //   }, [id]);
// //   // useEffect(() => {
// //   //   fetch(
// //   //     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
// //   //   ).then(res => res.json())    
// //   //   .then(movie => {
// //   //     setMovie(movie);
// //   //   })
// //   // }, [id])
// // // const MoviePage = ({ movie }) => {
// //   return (
// //     <>
// //       {movie ? (
// //         <>
// //           <MovieHeader movie={movie} />
// //           <div className="row">
// //             <div className="col-3">
// //               <img
// //                 src={
// //                   movie.poster_path
// //                     ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
// //                     : "./film-poster-placeholder.png"
// //                 }
// //                 className="movie"
// //                 alt={movie.title}
// //               />
// //             </div>
// //             <div className="col-9">
// //               <MovieDetails movie={movie} />
// //             </div>
// //           </div>
// //         </>
// //         ) : (
// //         <p>Waiting for movie details</p>
// //       )}
// //     </>
// //   );
// // };

// export default MoviePage
