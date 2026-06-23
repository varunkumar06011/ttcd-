import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Events from './pages/Events';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Members from './pages/Members';
import Telugu from './pages/Telugu';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="news" element={<News />} />
        <Route path="events" element={<Events />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="contact" element={<Contact />} />
        <Route path="telugu" element={<Telugu />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
