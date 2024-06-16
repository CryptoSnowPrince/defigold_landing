import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import ProgressBar from "./components/progressbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const modifyNavbarStatus = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    console.log(showNavbar);
  }, [showNavbar]);

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
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress); // Consider resource loaded even on error
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
    <div className="relative">
      <div className="flex flex-col items-start w-screen">
        <Header visibility={showNavbar} setNavbar={modifyNavbarStatus} />
        {/* {!showNavbar && (
          <>
            <Home />
            <Explore />
            <Mint />
            <Start />
            <Footer />
          </>
        )} */}
      </div>
    </div>
  );
}

export default App;
