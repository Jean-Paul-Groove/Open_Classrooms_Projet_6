import './Banner.css';

function Banner(props) {
  const img = props.img;
  let txt = props.text;
  if (txt) {
    txt = txt.split(',');
  }
  const isThickMobilebanner = props.isThickMobilebanner;
  return (
    <figure
      className={`banner ${isThickMobilebanner && 'banner__thick__mobile'}`}
    >
      <img className="banner__img" src={img} alt="" />
      <figcaption className="banner__text">
        {txt &&
          txt.map &&
          txt.map((string, index) => {
            return (
              <span className={index === 0 && 'banner__text__first-span'}>
                {index === 0 ? `${string},` : `${string}`}
              </span>
            );
          })}
      </figcaption>
    </figure>
  );
}

export default Banner;
