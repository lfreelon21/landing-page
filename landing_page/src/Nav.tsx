import './Nav.css'; 
import { FaLinkedin, FaFacebook, FaYoutube, FaSearch } from 'react-icons/fa';
import chens_group_logo from './assets/chens_group.png';

export default function Nav() {
  return (
    <header className="navbar-header">
      <div className="top-bar">
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
        <div className="right-side">
          <div className="wechat">
            <button className="wechat-btn">微信: chensadmin</button>
          </div>
          <div className="search-lang">
            <div className="search-container">
              <input type="text" placeholder="Search" />
              <FaSearch className="search-icon" />
            </div>
            <div className="language-toggle">
              中文 | EN
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={chens_group_logo} alt="Chens Group" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Business Immigration</a></li>
          <li><a href="#">Worker Immigration</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </nav>
    </header>
  );
};
