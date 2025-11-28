import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Awards from './pages/Awards';
import Founder from './pages/Founder';
import Social from './pages/Social';
import Shop from './pages/Shop';
import PodcastDetail from './pages/PodcastDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-neon-cyan selection:text-black">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/social" element={<Social />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/podcast/:id" element={<PodcastDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
