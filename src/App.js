import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/header';
import Summary from './components/summary';
import Pioneer from './components/pioneer';
import Features from './components/features';
import MarketPlace from './components/marketplace';
import Launchpad from './components/launchpad';
import Presentation from './components/presentation';
import Footer from './components/footer';
import Investors from './components/investors';
import { Loader } from '@react-three/drei';
import ScrollToTopButton from './components/scroll';
import Stairs from './components/stairs';
import WelcomeWithLoading from './components/welcomewithloading';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const modifyNavbarStatus = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className='relative'>
        <div className='flex flex-col items-start w-screen overflow-x-hidden'>
          <Header visibility={showNavbar} setNavbar={modifyNavbarStatus} />
          {!showNavbar && (
            <>
              <WelcomeWithLoading />
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
