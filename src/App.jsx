import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home/Home';
import Blog from './views/Blog/Blog';
import Post from './components/Post/Post';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Testimonios from './components/Testimonios/Testimonios';
import Login from './views/Login/Login';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/testimonios' element={<Testimonios />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
