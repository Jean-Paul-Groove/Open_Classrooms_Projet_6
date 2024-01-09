import './Dropdown.css';
import arrow from '../../assets/arrowDropdown.svg';
import { useState } from 'react';

function Dropdown(props) {
  const { title, text, isList } = props;
  const [dropdownStatus, setdropdownStatus] = useState('closed');
  function handleClickDropdown(dropdownStatus) {
    if (dropdownStatus === 'open') {
      setdropdownStatus('closing');
      setTimeout(() => setdropdownStatus('closed'), 300);
    }
    if (dropdownStatus === 'closed') {
      setdropdownStatus('openning');
      setTimeout(() => setdropdownStatus('open'), 300);
    }
  }
  let list;
  if (isList && text) {
    list = text.slice(0);
    return (
      <div className={`dropdown  dropdown__${dropdownStatus}`}>
        <p
          className="dropdown__title"
          onClick={() => handleClickDropdown(dropdownStatus)}
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
      <div className={`dropdown  dropdown__${dropdownStatus}`}>
        <p
          className="dropdown__title"
          onClick={() => handleClickDropdown(dropdownStatus)}
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
