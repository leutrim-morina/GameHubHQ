import React, { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { GameContext } from '../GameContext';
import Footer from './Footer';

function GameDetails() {
  const { id } = useParams();
  const gameData = useContext(GameContext);
  const [game, setGameData] = useState(true);

  useEffect(() => {
    const selectedGame = gameData.find((game) => game.id === parseInt(id));
    if (selectedGame) {
      setGameData(selectedGame);
    }
    
  }, [gameData, id]);

  return (
    <>
    <div className="row p-5 m-5">
    <div className="col-md-12 card h-100 " id="backgroundC">
      <h1 className="card-title text-center pb-4">{game.name}</h1>
      <img
        className="card-img-top h-100"
        src={game.background_image}
        alt={game.name}
      />
      <p className="card-title text-center"> Last Game Updated: {game.updated}</p>
      <p className="card-text">
        <b>Released:</b> {game.released}
      </p>
      <p className="card-text">
        <b>Genres:</b>{' '}
        {game.genres && game.genres.map((genre) => genre.name).join(', ')}
      </p>
      <p className="card-text">
        <b>Platforms:</b>{' '}
        {game.platforms &&
          game.platforms.map((platform) => platform.platform.name).join(', ')}
      </p>
      <p><b>Game Rated:</b> {game.rating} of {game.rating_top}</p>
      <div className="card-text text-center">
          <b>Game Screenshots:</b><br />
          {game.short_screenshots && game.short_screenshots.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} className="p-2" style={{ width: '400px', height: 'auto' }}
              />
            ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
    

export default GameDetails;