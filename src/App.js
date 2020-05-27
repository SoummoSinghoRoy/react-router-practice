import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about-us' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/posts/:postId' component={Posts} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;