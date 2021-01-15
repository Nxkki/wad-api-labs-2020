import React from 'react';
import { useContext } from 'react';
import { MoviesContext } from './contexts/moviesContext';

// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getSimilarMovies } from "../../api/tmdb-api";

import "./globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

//  export const Movies = () => {
//     const context = useContext(MoviesContext);
//     return  ( 
//     <div>
//         <h2>Movies</h2>
//         <div className="row movies big info">
//         {context.movies.map(s => { return <>
//             <div className="col-sm-3">
//                     <div className="card  bg-white">
//                     <Link to={`/movies/${s.id}`}>
//                     <img
//                         className="card-img-tag center "
//                         alt={s.title}
//                         src={
//                         movie.poster_path
//                             ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
//                             : "./film-poster-placeholder.png"
//                         }
//                 />
//                 </Link>
//                 <div className="card-body">
//                     <h4 className="card-title ">{s.title}</h4>
//                     <p>
//                     <FontAwesomeIcon icon={["fas", "calendar"]} />
//                     <span> {s.release_date}</span>
//                     </p>
//                     <p>
//                     <FontAwesomeIcon icon={["fas", "star"]} />
//                     <span> {s.vote_average}</span>
//                     </p>
//                 </div>
//                 </div>
//         })}
        
//             </div>
          
         



//     </div>      
//      </>
//     );
// }
export const Movies = () => {
    const context = useContext(MoviesContext);
     return (
            <div>
            <h2>Movies</h2>
            <div className="row movies bg-info">
                {context.movies.map(r => { return <>
                <div className="col-sm-3">
                    <div className="card  bg-white">
                        <Link to={`/movies/${r.id}`}>
                        <img
                        className="card-img-tag center "
                        alt={r.title}
                        src={
                            r.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
                            : "./film-poster-placeholder.png"
                        }
                        />
                        </Link>
                    <div className="card-body">
                        <h4 className="card-title ">{r.title}</h4>
                        <p>
                        <FontAwesomeIcon icon={["fas", "calendar"]} />
                            <span> {r.release_date}</span>
                        </p>
                        <p>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                            <span> {r.vote_average}</span>
                        </p>
                    </div>

                </div>
            </div></> })}
        </div>
        </div>

);    
}
export const UpcomingMovies = () => {
    const context = useContext(MoviesContext);
    return ( <>
        <h2>Upcoming Movies </h2>
        <div>
            {context.upcoming.map(upcoming => { return <>{upcoming.id},{upcoming.title}<br /></> })}
        </div>
    </>);
}
export const TopRatedMovies = () => {
    const context = useContext(MoviesContext);
    return ( <>
        <h2>Top Rated Movies </h2>
        <div>
            {context.topRated.map(topRated => { return <>{topRated.id},{topRated.title}<br /></> })}
        </div>
    </>);
}

 export const Profile = () => {
    return <> <h2>My Profile </h2>
    </>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 