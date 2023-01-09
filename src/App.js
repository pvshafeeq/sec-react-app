import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import reactlogo from './img/react-logo.png'

function App() {
  return (
    //   <>
    //  <Link to='/'>Home</Link>
    //  <Link to='/about'>About Us</Link>
    //  <Routes>
    //  <Route path="/" element={<Home/>} />
    //  <Route path="/about" element={<AboutUs/>} />
    //  </Routes>
    //  </>

    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img className='ms-100' id='logo' src={reactlogo} alt="logo" />
          <h5 class="text-white ml-3">Welcome to React Session</h5>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>

          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <Link className='nav-link text-white navlnk' to='/'>Home</Link>
            </li>

            <li class="nav-item active">
              <Link className='nav-link text-white navlnk' to='/about'>About Us</Link>
            </li>

            <li class="nav-item active">
              <Link className='nav-link text-white navlnk' to='/contact'>Contact Us</Link>
            </li>

            <li class="nav-item active">
              <Link className='nav-link text-white navlnk' to='/blog'>Blog</Link>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
