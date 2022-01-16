import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import HeaderContainer from './containers/Header';
import {Articles} from './components/Articles';
import {Profile} from './components/Profle';
import {AddArticle} from './components/ArticleButton';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <HeaderContainer /> 
      <Routes>
        <Route path='/' element={<div>Main Page</div>} />
				<Route path='/article' element={<AddArticle  />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<div>404</div>} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;