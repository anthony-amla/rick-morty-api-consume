import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Characters from './Pages/Characters';
import CharacterProfile from './Pages/CharracterProfile';
import Episodes from './Pages/Episodes';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/rick-morty-api-consume/' element={<Home />} />
        <Route path='/rick-morty-api-consume/characters/*' element={<Characters/>} />
        <Route path='/rick-morty-api-consume/character/profile/*' element={<CharacterProfile/>} />
        <Route path='/rick-morty-api-consume/episodes/*' element={<Episodes/>} />
        <Route path='/rick-morty-api-consume/*' element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
