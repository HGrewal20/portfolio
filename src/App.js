import { Link, Route, Routes } from 'react-router-dom';
import News from './News';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Todo from './Todo';

function App() {
  return (
    <>
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<News />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
