import React, { useState } from 'react';
import './searchStyle.css';

const Search = ({ searchValue, onChange }) => {
  const [input, setInput] = useState(searchValue);
  const search = () => {
    onChange(input);
  };

  const searchChange = (e) => setInput(e.target.value);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="input"
          onChange={searchChange}
          value={input}
        ></input>
        <button type="submit" className="btn" onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default Search;
