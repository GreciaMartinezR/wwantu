import React, { createContext, useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import UserContext from './context/userContext';
import RegistroLogin from "./components/RegistroLogin";
import MovieHome from "./components/MovieHome";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {

  //Guardar usuario en localStorage
  const [users, setUsers] = useState({});

  useEffect(() => {
    
    if (localStorage.getItem("user")) {
      setUsers(JSON.parse(localStorage.getItem("user")))
      
    }
  }, [])

  //Lita de películas en Home
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=289da431`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    <UserContext.Provider value={{users, setUsers}}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <RegistroLogin />
          </Route>
          <Route exact path={`/home`}>
            <MovieHome searchValue={searchValue} setSearchValue={setSearchValue}/>
          </Route>
          <Route exact path={`/details`}>
            <MovieDetails />
          </Route>
          <Route exact path={`/favorites`}>
            <MovieList movies={movies} />
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
