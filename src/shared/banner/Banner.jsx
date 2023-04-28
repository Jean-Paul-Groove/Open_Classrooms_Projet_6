import './Banner.css';

function Banner(props) {
  const img = props.img;
  const txt = props.text;
  return (
    <figure className="banner">
      <img className="banner__img" src={img} alt="" />
      <figcaption className="banner__text">{txt}</figcaption>
    </figure>
  );
}

export default Banner;
