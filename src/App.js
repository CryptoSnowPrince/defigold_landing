import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Investors from './components/investors';
import Loading from './components/loading';
import { Loader } from '@react-three/drei';
import ScrollToTopButton from './components/scroll';
import Stairs from './components/stairs';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <ProgressBar progress={progress} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className='relative'>
        <div className='flex flex-col items-start w-screen overflow-x-hidden'>
          <Header visibility={showNavbar} setNavbar={modifyNavbarStatus} />
          {!showNavbar && (
            <>
              <Welcome />
              <Summary />
              <Pioneer />
              <Stairs />
              <Features />
              <MarketPlace />
              <Launchpad />
              <Presentation />
              <Investors />
              <Footer />
            </>
          )}
        </div>
      </div>
      <Loader />
      <ScrollToTopButton />
      <ToastContainer />
    </>
  );
}

export default App;
