import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

import Home from '../routes/home';
import About from '../routes/about';

const App = () => {

  return (
    <div id='app'>
      <Header />
      <Router>
				<Home path='/' />
				<About path='about' />
      </Router>
    </div>
  );
};

export default App;