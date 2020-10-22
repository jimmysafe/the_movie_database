import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from './components/Layout'
import Popular from './pages/Popular';
import Movie from './pages/Movie'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>

          <Redirect exact from="/" to="/popular" />
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/movie/:movie_id">
              <Movie />
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
