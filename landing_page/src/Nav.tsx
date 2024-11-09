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
        <svg className="burger" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
        </svg>
        <button className="contact-btn">Contact Us</button>
      </nav>
    </header>
  );
};
