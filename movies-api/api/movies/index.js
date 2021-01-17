import express from 'express';
import movieModel from './movieModel';
import upcomingMovieModel from './upcomingMovieModel';
import topRatedModel from './topRatedModel';
// import upcomingMovies from './upcomingMovieModel';
import popularMovieModel from './popularMovieModel';
import {
 getMovieReviews, getGenres
} from '../tmdb-api';
// import upcomingMovieModel from './upcomingMovieModel';

const router = express.Router();

// router.get('/', (req, res,next) => {
//   getMovies().then(movies => res.status(200).send(movies))
//   .catch((error) => next(error));
// });
router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/upcoming', (req, res, next) => {
  upcomingMovieModel.find().then(upcomingMovieModel => res.status(200).send(upcomingMovieModel)).catch(next);
});

router.get('/topRated', (req, res, next) => {
  topRatedModel.find().then(topRatedModel => res.status(200).send(topRatedModel)).catch(next);
});
router.get('/popular', (req, res, next) => {
    popularMovieModel.find().then(popularMovieModel => res.status(200).send(popularMovieModel)).catch(next);
  });

// router.get('/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getMovie(id).then(movie => res.status(200).send(movie))
//   .catch((error) => next(error));
// });

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});    
router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

// router.get('/genres', (req, res,next) => {
//   getGenres().then(movies => res.status(200).send(movies))
//   .catch((error) => next(error));
// });

export default router;