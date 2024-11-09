import './Visa.css'
import background from '../assets/background.png'
import RedButton from '../RedButton';

export default function Visa() {

  return (
    <div className="visa">
      <img className="background" src={background} alt="" />
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="text">Make Your Canadian Immigration Dream A Reality!</p>
        </div>
        <RedButton/>
      </div>
    </div>
  );
}