import './MeetOurTeam.css';
import gia from '../assets/gia.png';
import RedButton from '../RedButton';

export default function MeetOurTeam() {
return (
  <div className="meet-our-team">
    <h1>Meet Our Team</h1>
    <div className="meet-container">
      <img src={gia} alt="Gia"/>
      <div className="content">
        <h2>Gia Chen (Founder)</h2>
        <h3>RCIC (Regulated Canadian Immigration Consultant)</h3>
        <p>As an immigrant to Canada in 2017, she understands the challenges that newcomers face on their immigration journey.</p>
        <p>With a passion for helping others, she draws on her 10 years of experience in the field to provide professional guidance, aiming to support more individuals in achieving their Canadian dream!</p>
      </div>
    </div>
    <RedButton text="Meet The Whole Team"/>
  </div>
)
}