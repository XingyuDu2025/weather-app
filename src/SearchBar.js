import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(city); 
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location"
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
