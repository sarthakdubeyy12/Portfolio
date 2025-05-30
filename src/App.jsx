import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Internship from './components/Internship';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter basename="/My-portfolio">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/internship" element={<Internship />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
