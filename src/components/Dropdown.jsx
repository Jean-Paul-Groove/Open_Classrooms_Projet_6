import './Dropdown.css';
import arrow from '../assets/arrowDropdown.svg';
import { useState } from 'react';

function Dropdown(props) {
  const { title, text, isList } = props;
  const [isOpen, setIsOpen] = useState(true);
  function handleClickDropdown(isOpen) {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  let list;
  if (isList && text) {
    list = text.slice(0);
    return (
      <div
        className={`dropdown ${isOpen ? 'dropdown__open' : 'dropdown__close'}`}
      >
        <p
          className="dropdown__title"
          onClick={() => handleClickDropdown(isOpen)}
        >
          {title}
          <img src={arrow} alt="" className="dropdown__arrow" />
        </p>
        <p className="dropdown__text">
          <ul>
            {list.map &&
              list.map((item) => {
                console.log(list);
                return <li>{item}</li>;
              })}
          </ul>
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={`dropdown ${isOpen ? 'dropdown__open' : 'dropdown__close'}`}
      >
        <p
          className="dropdown__title"
          onClick={() => handleClickDropdown(isOpen)}
        >
          {title}
          <img src={arrow} alt="" className="dropdown__arrow" />
        </p>
        <p className="dropdown__text">{text}</p>
      </div>
    );
  }
}

export default Dropdown;
