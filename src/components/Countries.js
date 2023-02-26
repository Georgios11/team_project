import React from 'react';

import Country from './Country';
const Countries = ({ countries, handleDelete }) => {
    // console.log(countries);
    const countriesArray = countries.map((country) => <Country key={country.id} country={country} handleDelete={handleDelete} />);
    return <section className="countries">{countriesArray}</section>;
};

export default Countries;
