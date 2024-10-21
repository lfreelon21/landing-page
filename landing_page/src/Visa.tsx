import background from './assets/background.png'

export default function Visa() {

  return (
    <div>
      <img className="background" src={background} alt="" />
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="text">Make Your Canadian Immigration Dream A Reality!</p>
        </div>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
}