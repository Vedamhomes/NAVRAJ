import './App.css';
import CoreStrength from './coreStrength';
import Footer from './footer';
import MainContent from './mainContent';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='image_container'>
        <img className='main_image' fetchpriority="high" decoding="async" src="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" alt="" data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" data-no-retina="" data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" />
        <div className="image_container_txt_box centered">Extraordinaire Experiences. Extraordinaire Life. </div>
      </div>
      <MainContent />

      <CoreStrength />

      <Footer />
    </div>
  );
}

export default App;
