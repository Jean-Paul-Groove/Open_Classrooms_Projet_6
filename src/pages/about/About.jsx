import './About.css';
import bannerImg from '../../assets/aboutBanner.jpg';
import Banner from '../../components/Banner';
function About() {
  return (
    <div className="about">
      <Banner img={bannerImg} />
      <h1 className="about__title">A PROPOS</h1>
    </div>
  );
}
export default About;
