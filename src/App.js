import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import MoviePage from './Components/MoviePage';
import Landingpg from './Components/Landingpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Landingpg/>}/>
          <Route path = "/home" element={<Homepage/>}/>
          <Route path = "/home/movie" element = {<MoviePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
