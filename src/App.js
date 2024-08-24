import { useState } from 'react';
import './App.css';
import CoreStrength from './coreStrength';
import Footer from './footer';
import MainContent from './mainContent';
import Navbar from './navbar';
import UserInputModal from './UserInputModal';

function App() {

  const [ isInputModalOpen, setIsInputModalOpen] = useState(false);
  return (
    <div className="App">
      <Navbar setIsInputModalOpen={setIsInputModalOpen} />
      <div className='image_container'>
        <img className='main_image' fetchpriority="high" decoding="async" src="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" alt="" data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" data-no-retina="" data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" />
        <div className="image_container_txt_box centered">Extraordinaire Experiences. Extraordinaire Life. </div>
      </div>
      <MainContent />

      <CoreStrength setIsInputModalOpen={setIsInputModalOpen} />

      <Footer />

    {isInputModalOpen && (
      <UserInputModal isInputModalOpen={isInputModalOpen} setIsInputModalOpen={setIsInputModalOpen} />
    )}
    </div>
  );
}

export default App;
