import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchCountries();
  }, []);

  const filterCountries = (startsWith) => {
    if (startsWith === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(startsWith.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <div>
      <h2>Country List</h2>
      <input
        type="text"
        placeholder="Filter by starting letter"
        onChange={(e) => filterCountries(e.target.value)}
      />
      <div className="row">
        {filteredCountries.map((country) => (
          <div className="col-md-4 mb-3" key={country.cca2}>
            <div className="card">
              <img
                src={country.flags.svg}
                className="card-img-top"
                alt="Country Flag"
                style={{ height: '200px' }, { width: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">{country.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
