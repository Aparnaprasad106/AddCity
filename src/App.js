import React, { useState } from 'react';
import './City.css'; 

const CityForm = () => {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setErrorMessage(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      setErrorMessage('City name cannot be empty .');
      return;
    }

    if (cityList.includes(trimmedCity.toLowerCase())) {
      setErrorMessage('City name already exists.');
      return;
    }

    setCityList([...cityList, trimmedCity.toLowerCase()]);
    setCity(''); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="input"
        />
        <button type="submit" className="button">
          Add City
        </button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <ul className="cityList">
        {cityList.map((city, index) => (
          <li key={index} className="cityItem">
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityForm;
