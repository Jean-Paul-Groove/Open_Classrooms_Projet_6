import './Announce.css';
import { useParams } from 'react-router-dom';
import { useFetchAnnounces } from '../../utils/hooks/useFetchAnnounces';
import Carousel from './components/carousel/Carousel';
import Tag from './components/tag/Tag';
import HostInfo from './components/hostInfo/HostInfo';
import Ratings from './components/rating/Rating';
import Dropdown from '../../shared/dropdown/Dropdown';
import { Navigate } from 'react-router-dom';

function Announce() {
  const { id } = useParams();

  let { isLoading, announces } = useFetchAnnounces();

  const announce = announces.find((announce) => announce.id === id);

  if (announces.length > 0 && !isLoading && !announce) {
    return <Navigate to="/notFound" replace />;
  } else {
    return isLoading ? (
      <div className="announce__loader"></div>
    ) : (
      <div className="announce">
        {announce && (
          <>
            <Carousel images={announce.pictures} />
            <div className="announce__presentation">
              <div className="announce__specs">
                <p className="announce__title">{announce.title}</p>
                <p className="announce__location">{announce.location}</p>
                <Tag tags={announce.tags} />
              </div>
              <div className="announce__host-info-rating__container">
                <HostInfo
                  image={announce.host.picture}
                  name={announce.host.name}
                />
                <Ratings rating={announce.rating} />
              </div>
            </div>
            <div className="announce__dropdowns__container">
              <Dropdown title={'Description'} text={announce.description} />
              <Dropdown
                title={'Équipements'}
                text={announce.equipments}
                isList={true}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Announce;
