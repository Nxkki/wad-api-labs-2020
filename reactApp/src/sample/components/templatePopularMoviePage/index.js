import React, { useState } from "react";
import Header from "../headerPopularMovies";
import PopularMovies from "../popularMovies";
import FilterControls from "../filterControls";

const PopularMoviesPageTemplate = ({ movies, title, action }) => {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genre = Number(genreFilter)
    let displayedMovies = movies
        .filter(m => {
            return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter(m => {
            return genre > 0
                ? m.genre_ids.includes(Number(genreFilter))
                : true;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    };

    return (
        <>
            <Header title={title} numMovies={displayedMovies.length} />
            <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length} />
            <PopularMovies
                action={action}
                movies={displayedMovies}
            />
        </>
    );
    
};

export default PopularMoviesPageTemplate;


// import React, { useState } from "react";
// import Header from "../headerTopRatedMovies";
// import TopRatedMovies from "../topRatedMovies";
// import FilterControls from "../filterControls";

// const TopRatedMoviesPageTemplate = ({ movies, title, action }) => {
//     const [nameFilter, setNameFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("0");
//     const genre = Number(genreFilter)
//     let displayedMovies = movies
//         .filter(m => {
//             return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
//         })
//         .filter(m => {
//             return genre > 0
//                 ? m.genre_ids.includes(Number(genreFilter))
//                 : true;
//         });

//     const handleChange = (type, value) => {
//         if (type === "name") setNameFilter(value);
//         else setGenreFilter(value);
//     };

//     return (
//         <>
//             <Header title={title} numMovies={displayedMovies.length} />
//             <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length} />
//             <TopRatedMovies
//                 action={action}
//                 movies={displayedMovies}
//             />
//         </>
//     );
// };

// export default TopRatedMoviesPageTemplate; 