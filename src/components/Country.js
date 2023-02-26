/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

const Country = ({ country, handleDelete }) => {
    return (
        <article className="card">
            <div className="card__header">
                <img src={country.flags.png} alt="" className="flag " />
            </div>
            <div className="card__content">
                <h2 className="country__name">{country.name.common}</h2>
                <h2></h2>
                <h3>{!country.capital ? `No capital` : 'Capital: ' + country.capital}</h3>
                <p className="country__population">Population: {country.population}</p>
            </div>
            <div className="card__footer">
                <button name="delete" className="btn" id="delete" onClick={() => handleDelete(country.id)}>
                    Delete Country
                </button>
            </div>
        </article>
    );
};

export default Country;
