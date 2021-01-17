import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import {movies} from './movies.js';
import {upcoming} from './upcoming.js';
import {topRated} from './topRated.js';
import upcomingModel from '../api/movies/upcomingMovieModel';
import topRatedModel from '../api/movies/topRatedModel';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
    // 'favourites': '[]'
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
]
const genres = [
  {
    'name' : 'Movie1',
    'genre' : "Genre1",
  },
  {
    'name' : 'Movie2',
    'genre' : "Genre2",
  },
];
// deletes all user documents in collection and inserts test data
export async function loadUsers() {
    console.log('load user Data');
      try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
      } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
      }
    }

    // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}
export async function loadUpcoming() {
    console.log('load seed data');
    console.log(upcoming.length);
    try {
      await upcomingModel.deleteMany();
      await upcomingModel.collection.insertMany(upcoming);
      console.info(`${upcoming.length} Upcoming Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
}
export async function loadTopRated() {
  console.log('load seed data');
  console.log(topRated.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRated);
    console.info(`${topRated.length} topRated Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}