import {  useState } from 'react';
import Footer from '../components/Footer';

function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <h2 className="faqi fs-1">Questions about GameHubHQ?</h2>
      <p className="faqi fs-1">We’ve got answers.</p>
      <div className="faq text-center mb-5">
        <div className="faq-qa">
          <h3  onClick={() => setIsOpen1(!isOpen1)}>What is GameHubHQ ?</h3>
            {isOpen1 && <p>
               Welcome to our Platform, the ultimate destination for all video game enthusiasts around the world! Our website is dedicated to providing you with the latest and most comprehensive information about all video games, from classic titles to the latest releases. We strive to be your one-stop-shop for all things video game-related, offering you detailed reviews, expert opinions, news, updates, and much more.</p>}
          </div>
        <div className="faq-qa">
            <h3  onClick={() => setIsOpen2(!isOpen2)}>What you can do with GameHubHQ ?</h3>
              {isOpen2 && <p>You can watch most rated Game, info about the games, where you can play esc....</p>}
        </div>
        <div className="faq-qa">
          <h3 onClick={() => setIsOpen3(!isOpen3)}>How much i need to pay for platform ?</h3>
            {isOpen3 && <p>GameHubHQ is totally free and always will be.</p>}
        </div>
      <div className="faq-qa">
        <h3  onClick={() => setIsOpen4(!isOpen4)}>How many games are in GameHubHQ ?</h3>
          {isOpen4 && <p>We have over 800,000+ Video Games in platform.</p>}
      </div>
    </div>
    <Footer />
  </>
  );
}

export default Faq
