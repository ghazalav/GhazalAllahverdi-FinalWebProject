import React, { useState } from 'react';
import './centerStyle.css';
import Search from './Search';
import Form from './Form';

const Center = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="main1">
      <div className="top">
        <Search searchValue={searchValue} onChange={setSearchValue} />
      </div>
      <div className="form">
        <Form searchValue={searchValue} />
      </div>
    </div>
  );
};
export default Center;
