import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
const Countries = ({ countries }) => {
    // console.log(countries);
    const countriesArray = countries.map((country) => <Country key={uuidv4()} country={country} />);
    return <section className="countries">{countriesArray}</section>;
};

export default Countries;
