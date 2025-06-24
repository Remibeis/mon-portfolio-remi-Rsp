import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Accueil />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;



