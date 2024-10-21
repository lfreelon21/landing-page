import './AreasOfPractice.css';
import LearnMoreButton from './LearnMoreButton';
import business_person from '../assets/business_person.png';
import handshake from '../assets/handshake.png';

export default function AreasOfPractice() {
  return (
    <div className="areas-of-practice">
      <h1>Areas of Practice</h1>
      
      <div className="practice-areas">
        <div className="practice-area">
          <img src={business_person} alt="Business person" />
          <div className="practice-area-content">
            <h2>Business Immigration</h2>
            <p>Interested in immigrating to Canada by owning a business?</p>
            <p>Our expert guidance in strategy, sales, marketing, and finance will help you establish your business and navigate the immigration process seamlessly.</p>
            <LearnMoreButton/>
          </div>
        </div>

        <div className="practice-area reverse">
          <img src={handshake} alt="Handshake" />
          <div className="practice-area-content">
            <h2>Worker Immigration</h2>
            <p>Seeking sponsorship from Canadian companies for work and immigration?</p>
            <p>Our network connects foreign workers with reputable employers to match your skills with the right opportunities.</p>
            <LearnMoreButton/>
          </div>
        </div>
      </div>
    </div>
  );
};