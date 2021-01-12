import express from 'express';
import UpcomingMovies from '../tmdb-api';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res,next) => {
    UpcomingMovies.find().then(UpcomingMovies =>  res.status(200).json(UpcomingMovies)).catch(next);
});

export default router;
 