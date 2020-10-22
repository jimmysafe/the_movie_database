import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from './components/Layout'
import Popular from './pages/Popular';
import Movie from './pages/Movie'
import ScrollToTop from './components/common/ScrollToTop';
import Actor from './pages/Actor';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>

          <Redirect exact from="/" to="/popular" />
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/movie/:movie_id">
              <Movie />
          </Route>
          <Route path="/actors/:actor_id">
              <Actor />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
