import './Home.css';
import Visa from './Visa';
import AreasOfPractice from './AreasOfPractice';
import MeetOurTeam from './MeetOurTeam';
import GetInTouch from './GetInTouch';
import ImmigrationInsights from './ImmigrationInsights';
import Videos from './Videos';
import InfoSection from './InfoSection';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Visa/>
      <AreasOfPractice/>
      <MeetOurTeam/>
      <GetInTouch/>
      <ImmigrationInsights/>
      <Videos/>
      <InfoSection/>
      <Footer/>
    </>
  );
}