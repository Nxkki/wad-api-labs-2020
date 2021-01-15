import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecommendations} from "../../api/tmdb-api";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ movie }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getRecommendations(movie.id).then(recommendations => {
      setRecommendations(recommendations);
    });
  }, []);
  return (

    <div> 
         <h3>Recommendations for Movie</h3>
      <div className="row movies big info">
         {recommendations.map(r => {
             return  (

                    <div className="col-sm-3">
                    <div className="card  bg-white">
                    <Link to={`/movies/${r.id}`}>
                    <img
                        className="card-img-tag center "
                        alt={r.title}
                        src={
                        movie.poster_path
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
            </div>
             );
           })}
      </div>
     </div>
    );
};




//           <div className="col-sm-3">
//         <div className="card  bg-white">

//         <Link to={' /movies/${r.id}'}>
//         <img className="card-img-tag center"
//         alt= {r.title}
//         src={
//             movie.poster_path
//             ? 'https://image.tmbd.org/t/p/w500/${r.poster_path}'
//             :  "./film-poster-placeholder.png"
//         }
//         />
//         </Link>
//         <div className= "card-body">
//         <h4 className="card-title ">{r.title}</h4>
//         <p>
//             <FontAwesomeIcon icon= {["fas", "calender"]} />
//             <span> {r.release_date} </span>
//         </p>
//         <p>
//         <FontAwesomeIcon icon= {["fas", "calender"]} />
//             <span> {r.vote_average} </span>
//         </p>
//         </div>
    
    
//  </div>   
//     </div>
//         ):
//     })}
//     </div>
//     </div>
//   );
// };
    
    
    
//     </div>