import './HostInfo.css';

function HostInfo(props) {
  const { image, name } = props;
  let nameBreak;
  if (name) {
    nameBreak = name.split(' ');
  }
  return (
    <figure className="host-info">
      <img className="host-info__picture" alt={name} src={image}></img>
      <figcaption className="host-info__name">
        {name &&
          nameBreak.map &&
          nameBreak.map((word) => {
            return <p>{word}</p>;
          })}
      </figcaption>
    </figure>
  );
}
export default HostInfo;
