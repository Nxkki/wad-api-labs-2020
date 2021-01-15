import React, { useContext } from "react";
import PageTemplate from '../components/templateTopRatedMoviesPage'
import { MoviesContext } from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedMoviesPage = () => {
    const context = useContext(MoviesContext);
    const topRated = context.topRated.filter((m) => {  // New
        return !("favorites" in m);
    });

    return (
        <PageTemplate
            title="TopRated Movies"
            movies={topRated}  /* Changed */
            action={(movie) => {
                return <AddToFavoritesButton movie={movie} />;
            }}
        />
    );
};


export default TopRatedMoviesPage;
// import React, { useState, useEffect } from "react";
// import StubAPI from "../api/stubAPI";
// import PageTemplate from '../components/templateMovieListPage'
// import { getMovies } from "../api/tmdb-api";

// const MovieListPage = () => {
//   const [movies, setMovies] = useState([]);
//   // useEffect(() => {
//   //   fetch(
//   //     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//   //   )
//   //     .then(res => res.json())
//   //     .then(json => json.results )
//   //     .then(movies => {
//   //       setMovies(movies);
//   //     });
//   // }, []);
//   useEffect(() => {
//     getMovies().then(movies => {
//       setMovies(movies);
//     });
//   }, []);
//   const addToFavorites = movieId => {
//     setMovies(movies => {
//       const index = movies.map(m => m.id).indexOf(movieId);
//       StubAPI.add(movies[index]);
//       let newMoviesState = [...movies]
//       newMoviesState.splice(index, 1);
//       return newMoviesState;
//     });
//   };

//   return (
//       <PageTemplate
//         title='Discover Movies'
//         movies={movies}
//         buttonHandler={addToFavorites}
//       />
//   );
// };

// export default MovieListPage;

// // // export default MovieListPage;
// // import React, {useState, useEffect } from "react";

// // // import React from "react";
// // import Header from "../components/headerMovieList";
// // import MovieList from "../components/movieList";
// // import FilterControls from "../components/filterControls";
// // import StubAPI from "../api/stubAPI";

// // // map2 p2 const MovieListPage = ({movies}) => {
// //   const MovieListPage = () => {
// //     const [titleFilter, setTitleFilter] = useState("");       // NEW
// //   const [genreFilter, setGenreFilter] = useState("0");      // NEW

// //     const [movies, setMovies] = useState([])
// //     useEffect(() => {
// //       fetch(
// //         `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
// //       )
// //         .then(res => res.json())
// //         .then(json => {
// //           console.log(json)
// //           return json.results
// //         })
// //         .then(movies => {
// //           setMovies(movies);
// //         });
// //     }, [])
// //     // , []);
// //     const genre = Number(genreFilter)
// //   let displayedMovies = movies
// //     .filter(m => {
// //       return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
// //     })
// //     .filter(m => {
// //       return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
// //     });

// //   const handleFilterChange = (type, value) => {
// //     if (type === "name") setTitleFilter(value);
// //     else setGenreFilter(value);
// //   };
// //   const addToFavorites = movieId => {
// //     // Find index position of selected movie in the list
// //     const index = movies.map(m => m.id).indexOf(movieId)

// //     StubAPI.add(movies[index])
// //     const updatedList = [...movies]  // Make a copy of the movie list
// //     updatedList.splice(index, 1)     // Remove selected movie from home page list
// //     setMovies(updatedList)  
// //   };

// //     return (  
// //     <>
// //     <Header numMovies={displayedMovies.length} />
// //       <FilterControls onUserInput={handleFilterChange} />
// //       <MovieList
// //         movies={displayedMovies}
// //         buttonHandler={addToFavorites}
// // />
// //     {/* <Header numMovies={displayedMovies.length} />          {/* CHANGED */}
// //       {/* // <FilterControls onUserInput={handleFilterChange} />    CHANGED */}
// //       {/* // <MovieList movies={displayedMovies} />  */} 
// //       {/* <Header numMovies={movies.length} />
// //       <FilterControls />
// //       <MovieList movies={movies} /> */}
// //     </>
// //   );
// // };

// // export default MovieListPage;





// // // //new
// // // import React, {useState, useEffect } from "react";
// // // // import React from "react";
// // // import Header from "../components/headerMovieList";
// // // import MovieList from "../components/movieList";
// // // import FilterControls from "../components/filterControls";
// // // import StubAPI from "../api/stubAPI";

// // // const MovieListPage = () => {
// // //   const [titleFilter, setTitleFilter] = useState("");       // NEW
// // //   const [genreFilter, setGenreFilter] = useState("0");      // NEW
// // // const [movies, setMovies] = useState([]);
// // //   useEffect(() => {
// // //     fetch(
// // //       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
// // //     )
// // //       .then(res => res.json())
// // //       .then(json => {
// // //         console.log(json)
// // //         return json.results
// // //       })
// // //       .then(movies => {
// // //         setMovies(movies);
// // //       });
// // //   }, []);
// // //   const addToFavorites = movieId => {
// // //     // Find index position of selected movie in the list
// // //     const index = movies.map(m => m.id).indexOf(movieId)

// // //     StubAPI.add(movies[index])
// // //     const updatedList = [...movies]  // Make a copy of the movie list
// // //     updatedList.splice(index, 1)     // Remove selected movie from home page list
// // //     setMovies(updatedList)  
// // //   }
// // // // NEW BLOCK START
// // // const genre = Number(genreFilter)
// // // let displayedMovies = movies
// // //   .filter(m => {
// // //     return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
// // //   })
// // //   .filter(m => {
// // //     return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
// // //   });

// // // const handleFilterChange = (type, value) => {
// // //   if (type === "name") setTitleFilter(value);
// // //   else setGenreFilter(value);
// // // };
// // // // NEW BLOCK END
// // // return (
// // //   // return (
// // // // const MovieListPage = ({movies}) => {
// // // //   return (
// // //     <>
// // //       {/* {/* <Header numMovies={movies.lengzth} /> */}
// // //       {/* <FilterControls /> */}
// // //       {/* <MovieList movies={movies} /> */}
// // //       <Header numMovies={displayedMovies.length} />
// // //       <FilterControls onUserInput={handleFilterChange} />
// // //       <MovieList
// // //         movies={displayedMovies}
// // //         buttonHandler={addToFavorites}
// // // />
// // //     </>
// // //   );
// // // };

// // // export default MovieListPage;
// // // //end