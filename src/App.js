import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import ProgressBar from './components/progressbar';
import Welcome from './components/welcome';
import Summary from './components/summary';
import Pioneer from './components/pioneer';
import Features from './components/features';
import MarketPlace from './components/marketplace';
import Launchpad from './components/launchpad';
import Presentation from './components/presentation';
import Footer from './components/footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const modifyNavbarStatus = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const resources = [...document.images];
    const totalResources = resources.length + 1; // +1 for the fonts
    let loadedResources = 0;

    const updateProgress = () => {
      loadedResources += 1;
      const percent = Math.floor((loadedResources / totalResources) * 100);
      setProgress(percent);
      if (loadedResources === totalResources) {
        setIsLoaded(true);
      }
    };

    resources.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress);
        img.addEventListener('error', updateProgress); // Consider resource loaded even on error
      }
    });

    document.fonts.ready.then(updateProgress);

    if (totalResources === 1) {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return <ProgressBar progress={progress} />;
  }

  return (
    <div className='relative'>
      <div className='flex flex-col items-start w-screen'>
        <Header visibility={showNavbar} setNavbar={modifyNavbarStatus} />
        {!showNavbar && (
          <>
            <Welcome />
            <Summary />
            <Pioneer />
            <Features />
            <MarketPlace />
            <Launchpad />
            {/* <Presentation /> */}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
