import './App.css';
import CoreStrength from './coreStrength';
import Footer from './footer';
import MainContent from './mainContent';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img fetchpriority="high" decoding="async" src="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" alt="" width="1920" height="800" data-lazyload="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" data-no-retina="" data-src-rs-ref="//v3.navrajindia.com/wp-content/uploads/2024/05/banner_main_1.jpg" />
      <MainContent />

      <CoreStrength />

      <Footer />
    </div>
  );
}

export default App;
