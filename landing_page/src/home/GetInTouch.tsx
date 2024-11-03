import './GetInTouch.css';
import BusinessForm from './BusinessForm';
import phone from '../assets/phone.png';

export default function GetInTouch() {  
  return (
    <div className="get-in-touch">
      <img src={phone} alt=""/>
      <div className="get-in-touch-container">
        <div className="text-content">
          <h1>Get In Touch</h1>
          <p>Fill out the form to discuss your case with an experienced immigration consultant</p>
        </div>
        <BusinessForm />
      </div>
    </div>
  )
}