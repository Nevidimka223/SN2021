import './App.css';

import { useState } from 'react';

import BodyContainer from './containers/Body';
import HeaderContainer from './containers/Header';
import { ARTICLES_PAGE, ADD_ARTICLE_PAGE, PROFILE_PAGE } from './constant/pages';

function App() {
  const [activePage, setActivePage] = useState(ARTICLES_PAGE)

  return (
    <div className="App">
      <HeaderContainer setActivePage={setActivePage}  /> 
      <BodyContainer activePage={activePage}/>
    </div>
  );
}

export default App;
