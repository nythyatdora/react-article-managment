import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav/nav';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import E404 from './components/E404/E404';

import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>

          <Route path='/404'>
            <E404></E404>
          </Route>

          <Route path={['', '/']}>
            <Nav></Nav>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </Route>
        </Switch>

      </div>
    </Router >
  );
}

export default App;
