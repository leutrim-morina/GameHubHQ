// Games.js
import { useContext } from 'react';
import { GameContext } from '../GameContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Games({ page, setPage, handleSearch }) {
  const data = useContext(GameContext);

  const handleKeyUp = (e) => {
    switch(e.keyCode) {
      case 13:
        handleSearch(e.target.value)
        break;
    }

  };

  return (
    <>
      <div className="col-4 d-flex pagination justify-content-center align-items-center">
        <input
          type="search" id="Searchid"
          className="form-control border"
          onKeyUp={handleKeyUp}
          placeholder="Search +800,000 Video Games"
        />
      </div>
      <h1 className="d-flex justify-content-center pt-4" id="textcolor">Explore the world of games</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4 p-4 m-0">
        {data &&
          data.map((game) => (
            <div key={game.id} className="col">
              <div className="card h-100 border border-black" id="card">
                <img src={game.background_image || "https://static.thenounproject.com/png/1554490-200.png"}
                alt={game.name}  className="card-img-top h-100" />
                <div className="card-body border border-black">
                  <h2 className="card-title text-center">{game.name}</h2>
                  <p className="card-text text-center">{game.description_raw}</p>
                  <div className="card-info text-center">
                    <p className="text-center">
                      <b>Released:</b> {game.released}
                    </p>
                    <p className="text-center">
                      <b>Genres:</b> {game.genres.map((genre) => genre.name).join(', ')}
                    </p>
                    <p className="text-center">
                      <b>Platforms:</b> {game.platforms.map((platform) => platform.platform.name).join(', ')}
                    </p>
                    <div className="d-flex justify-content-center">
                      <Link href="#" id="viewmore" className="btn " to={`/games/${game.id}`}>
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination">
          <a href="#" onClick={() => {
            if(page > 1) setPage(page => page -= 1)
          }}>Prev</a>
          <span>{ page }</span>
          <a href="#" onClick={() => {
            setPage(page => page += 1)
          }}>Next</a>
        </div>
      <Footer />
    </>
  );
}

export default Games;
