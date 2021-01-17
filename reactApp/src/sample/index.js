import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile} from "./pages";
import HomePage from "../sample/pages/homePage";
import UpcomingMovies from "../sample/pages/upcomingMoviePage";
import TopRated from "../sample/pages/TopRatedMoviesPage";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";
import MovieProvider from "../sample/contexts/moviesContext";
import GenresProvider from "../sample/contexts/genresContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import MoviePage from "../sample/pages/movieDetailsPage copy";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming Movies</Link>
          </li>
          <li>
            <Link to="/topRated">Top Rated Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
        <GenresProvider>
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          {/* <PrivateRoute path="/movies" component={Movies} /> */}
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/upcoming" component={UpcomingMovies} />
          <PrivateRoute path="/topRated" component={TopRated} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresProvider>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));