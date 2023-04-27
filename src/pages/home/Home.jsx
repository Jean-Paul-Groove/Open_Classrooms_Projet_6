import './Home.css';
import bannerImg from '../../assets/homeBanner.jpg';
import Banner from '../../components/Banner';
import Gallery from './Gallery';

function Home() {
  const bannerText = 'Chez vous, partout et ailleurs';
  return (
    <div className="home">
      <Banner img={bannerImg} text={bannerText} />
      <Gallery />
    </div>
  );
}

export default Home;
