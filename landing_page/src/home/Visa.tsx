import './Visa.css'
import background from '../assets/background.png'
import LearnMoreButton from '../RedButton';

export default function Visa() {

  return (
    <div>
      <img className="background" src={background} alt="" />
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="text">Make Your Canadian Immigration Dream A Reality!</p>
        </div>
        <LearnMoreButton/>
      </div>
    </div>
  );
}