import './Gallery.css';
import { useFetchAnnounces } from '../../../../utils/hooks/useFetchAnnounces';
import Card from '../card/Card';

function Gallery() {
  let { isLoading, announces } = useFetchAnnounces();

  return (
    <div className="gallery">
      {isLoading && (
        <>
          <Card key={0} isLoading={isLoading} />
          <Card key={1} isLoading={isLoading} />
          <Card key={2} isLoading={isLoading} />
          <Card key={3} isLoading={isLoading} />
          <Card key={4} isLoading={isLoading} />
          <Card key={5} isLoading={isLoading} />
        </>
      )}
      {announces.map((announce) => {
        return (
          <Card
            id={announce.id}
            title={announce.title}
            cover={announce.cover}
            key={announce.id}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
