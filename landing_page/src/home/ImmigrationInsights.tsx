import './ImmigrationInsights.css'
import business_person from '../assets/business_person.png';
import RedButton from '../RedButton';

export default function ImmigrationInsights() {
  const business_immigration_divs = [];

  for(let i = 0; i < 3; i++) {
    business_immigration_divs.push(
        <div key={i} className="business-immigration">
          <img src={business_person} alt="Man" />
          <h2>Business Immigration</h2>
          <p>Interested in immigrating to Canada by owning a business?
          Our expert guidance in strategy, sales, marketing, and finance will help you establish your business and navigate the immigration process seamlessly.
          </p>
          <RedButton text="Learn More"/>
        </div>
    )
  }

  return (
    <div className="immigration-insights">
      <h1>Immigration Insights</h1>
      <div className="immigration-container">
        {business_immigration_divs}
      </div>
    </div>
  )
}