# Assignment 2 - Web API.

Name: Nikki Osita

## Features.
 + Feature 1 - (Upcoming Movies) .... User can view the list of upcoming movies.
 + Feature 2 - (Top Rated Movies) .... User can view the list of movies that hold the highest rating.
 + Feature 3 - (Popular Movies) .... User can view the list of movies that are the most popular. 
 + Feature 4 - (Search Movies) .... User can search for a particular movie.
 + Feature 5 - (Movie Details) .... User can more information on a particular movie.
## Installation Requirements
•	After downloading the current version of this git repository and opening its extracted folders in a code editor. The following commands most be run in two separate terminals that is in the directory labeled “movies-api” and another on in the “reactApp" directory. 
npm install
npm start
•	Node.js must be downloaded and installed: https://nodejs.org/en/download/
•	MongoDB must be downloaded and installed Mongodb by selecting the relevant installer for your OS: https://www.mongodb.com/download-center/community
•	Once its installed database folder needs to be made:
mkdir db
mongod -dbpath db
•	change to the db diterctory and start mongod 
mongod.exe
## API Configuration
The App will not work without an .env folder, so you need to create one.
The content should look similar to this. 

NODE_ENV=development
PORT=8080
HOST= localhost
mongoDB=YourMongoURL
seedDb=true
SECRET=ilikecake
REACT_APP_TMDB_KEY= PERSONAL TMDB_KEY

## API Design
|  |  GET | POST | PUT | DELETE
| /api/users | N/A | Post the username and password then checks if the database stores the inputs | N/A | N/A 
| /api/users?action=register | N/A | Post the username and password then database stores the inputs | N/A | N/A 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/upcoming | Gets upcoming movies | N/A | N/A | N/A 
| /api/movies/toprated | Gets top rated movies | N/A | N/A | N/A 
| /api/movies/popular | Gets popular movies | N/A | N/A | N/A 


## Security and Authentication
A successful login is needed to view the movie details page or the upcoming, top rated and popular page and profile.
In order to sign up Regular Expression is used to ensure all passwords are at least 5 characters long and contain at least one number and one letter.
Usernames and passwords in hash are stored with MongoDB. 

## Integrating with React App
The API handles what is sent to the integrated React app.
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
export const getPopularMovies = () => {
    return fetch(
       '/api/movies/popular',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };


## Extra features
+ Movie Details-Displays more about a particular movie information on a page. 
+ Upcoming movie-Lists all upcoming movies returned by the seed data
+ Top rated page- Lists all the movies in order of rating (highest to lowest) returned by the seed data
+ Popular movie-Lists all popular movies returned by the seed data


