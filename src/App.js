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
        <Route path='/' element={<Home />} />
        <Route path='/characters/*' element={<Characters/>} />
        <Route path='/character/profile/*' element={<CharacterProfile/>} />
        <Route path='/episodes/*' element={<Episodes/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
