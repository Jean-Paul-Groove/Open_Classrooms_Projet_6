import './Tag.css';

function Tag(props) {
  const tags = props.tags;
  console.log(tags);
  return (
    <ul className="tag__list">
      {tags.map((tag) => {
        return <li className="tag__item">{tag}</li>;
      })}
    </ul>
  );
}
export default Tag;
