// App.js
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import Games from './pages/Games';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { GameContext } from './GameContext';
import GameDetails from './components/GameDetails';
import NotFound from './pages/NotFound';

function App() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=f1bc440fadc74f17b1de8f455a98f937&page=${page}`)
      .then((response) => {
        setData(response.data.results);
      });
  }, [page]);

  useEffect(() => {
    if (search) {
      axios
        .get(`https://api.rawg.io/api/games?key=f1bc440fadc74f17b1de8f455a98f937&search=${search}`)
        .then((response) => {
          setData(response.data.results);
        });
    }
  }, [search]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${id}?key=f1bc440fadc74f17b1de8f455a98f937`)
      .then((response) => {
        setGame(response.data.results);
      });
  }, [id]);

  const handleSearch = (str) => {
    setSearch(str);
  };

  return (
    <div className="content">
      <BrowserRouter>
        <Nav />
        <GameContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games page={page} setPage={setPage} handleSearch={handleSearch} />} />
            <Route path="/games/:id" element={<GameDetails game={game} />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GameContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
