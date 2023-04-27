import './Announce.css';
import { useParams } from 'react-router-dom';
import { useFetchAnnounces } from '../../utils/hooks/useFetchAnnounces';
import Carousel from './Carousel';
import Tag from './Tag';
import HostInfo from './HostInfo';
import Ratings from './Rating';
import Dropdown from '../../components/Dropdown';

function Announce() {
  const { id } = useParams();

  let { isLoading, announces } = useFetchAnnounces();
  const indexOfAnnounce = announces.findIndex((announce) => announce.id === id);

  console.log('index de l"annonce est ' + indexOfAnnounce);
  let announce = {};
  let tags = [];
  let host = {};
  let rating;
  if (indexOfAnnounce >= 0) {
    announce = announces[indexOfAnnounce];
    tags = announce.tags;
    host = announce.host;
    rating = announce.rating;
    console.log('Rating: ' + rating);
  }

  return (
    <div className="announce">
      {announce && (
        <>
          <Carousel images={announce.pictures} />
          <div className="announce__presentation">
            <div className="announce__titles">
              <h1>{announce.title}</h1>
              <h2>{announce.location}</h2>
              <Tag tags={tags} />
            </div>
            <div className="announce_host-info-rating__container">
              <HostInfo image={host.picture} name={host.name} />
              <Ratings rating={rating} />
            </div>
          </div>
          <div className="announce__dropdowns__container">
            <Dropdown title={'Description'} text={announce.description} />
            <Dropdown
              title={'Equipements'}
              text={announce.equipments}
              isList={true}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default Announce;
