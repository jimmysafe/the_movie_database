import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from './components/Layout'
import Category from './pages/Category';
import Movie from './pages/Movie'
import ScrollToTop from './components/common/ScrollToTop';
import Actor from './pages/Actor';
import Genre from './pages/Genre';
import Searched from './pages/Searched';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/popular">
              <Category />
          </Route>
          <Route path="/top_rated">
              <Category />
          </Route>
          <Route path="/upcoming">
              <Category />
          </Route>
          <Route path="/genre/:genre_id">
              <Genre />
          </Route>
          <Route path="/movie/:movie_id">
              <Movie />
          </Route>
          <Route path="/actors/:actor_id">
              <Actor />
          </Route>
          <Route path="/search">
              <Searched />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
