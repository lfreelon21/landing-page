import './InfoSection.css';
import chens_group from '../assets/chens_group.png';

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-section-container">
        <div className="left-container">
          <img src={chens_group} alt="" />
          <p>60 Atlantic Avenue, Toronto, ON M6K 1X9</p>
        </div>
        <div className="right-container">
          <div className="people">
            <h2>People</h2>
            <a href="">About Us</a>
            <a href="">Our Team</a>
          </div>
          <div className="expertise">
            <h2>Insights</h2>
            <a href="">Blogs</a>
            <a href="">Events</a>
          </div>
          <div className="insights">
            <h2>Expertise</h2>
            <a href="">Business Immigration</a>
            <a href="">Worker Immigration</a>
          </div>
          <div className="contact">
            <h2>Get In Touch</h2>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}