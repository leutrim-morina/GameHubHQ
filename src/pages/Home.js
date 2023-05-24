import React from 'react'
import Footer from '../components/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {
  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className="m-5 p-4">
      <Slider {...settings}> 
        <div className="align-center text-center p-2 m-2">
          <h3 className="text-center">Trending Now | Counter Strike Global Offensive</h3> 
          <img src="https://pixelz.cc/wp-content/uploads/2017/11/counter-strike-global-offensive-uhd-4k-wallpaper.jpg" alt="PUBG" className="mx-auto w-50" width="500px "/>
          <p>Counter Strike Global Offensive is a popular FPS game with intense competitive gameplay, where players as terrorists or counter-terrorists engage in fast-paced matches using a variety of weapons and tactics.</p>
           <a href="/games"className="btn btn-outline" id="viewmore">EXPLORE ALL GAMES</a> 
        </div>
        <div className="align-center text-center p-2">
          <h3 className="text-center">Trending Now | Grand Theft Auto V</h3> 
          <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="PUBG" className="mx-auto w-50 " width="500px"/>
          <p>Grand Theft Auto V is an open-world action-adventure game where players explore a fictional city, engage in missions, and experience a dynamic story filled with crime, driving, and exploration.</p>
          <a href="/games"className="btn btn-outline" id="viewmore">EXPLORE ALL GAMES</a> 
       </div>
       <div className="align-center text-center p-2">
          <h3 className="text-center">Trending Now | The Witcher 3: Wild Hunt</h3> 
          <img src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg" alt="PUBG" className="mx-auto w-50 " width="500px"/>
          <p>The Witcher 3: Wild Hunt is an expansive open-world RPG, where players assume the role of Geralt of Rivia, a monster hunter, embarking on a thrilling quest in a richly detailed fantasy world.</p>
          <a href="/games"className="btn btn-outline" id="viewmore">EXPLORE ALL GAMES</a>  
      </div>
      <div className="align-center text-center p-2">
          <h3 className="text-center">Trending Now | Red Dead Redemption 2</h3> 
          <img src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg" alt="PUBG" className="mx-auto w-50 " width="500px"/>
          <p>Red Dead Redemption 2 is an epic open-world Western game, following the outlaw Arthur Morgan as he navigates the lawless frontier, engaging in thrilling shootouts, quests, and immersive storytelling.</p>
           <a href="/games"className="btn btn-outline" id="viewmore">EXPLORE ALL GAMES</a> 
       </div>
       <div className="align-center text-center p-2">
          <h3 className="text-center">Trending Now | PlayerUnknown’s Battlegrounds</h3> 
          <img src="https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg" alt="PUBG" className="mx-auto w-50 " width="500px"/>
          <p>PlayerUnknown's Battlegrounds (PUBG) is a popular battle royale game where players fight to be the last one standing on a large map, using strategic gameplay and skilled shooting.</p>
          <a href="/games"className="btn btn-outline" id="viewmore">EXPLORE ALL GAMES</a> 
      </div>
      </Slider>
    </div>
    <Footer />
    </>
  );
}

export default Home