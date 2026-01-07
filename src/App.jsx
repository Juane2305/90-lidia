import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HeroAnimation from './components/HeroAnimation';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import DressCode from './components/DressCode';
import AddToCalendar from './components/AddToCalendar';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const handleEnter = (withMusic) => {
    setPlayMusic(withMusic);
    setShowWelcome(false);
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowMain(true);
  };

  return (
    <div className="min-h-screen bg-black-deep">
      {/* Music Player - Always rendered when music is enabled */}
      {playMusic && <MusicPlayer autoPlay={true} />}
      
      {/* Welcome Screen */}
      {showWelcome && (
        <WelcomeScreen onEnter={handleEnter} />
      )}

      {/* Hero Animation with phrases */}
      {showAnimation && (
        <HeroAnimation onComplete={handleAnimationComplete} />
      )}

      {/* Main Content */}
      {showMain && (
        <>
          <main>
            <Hero />
            <Countdown />
            <EventInfo />
            <Gallery />
            <DressCode />
            <AddToCalendar />
            <RSVP />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
