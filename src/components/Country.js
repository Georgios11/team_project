import React from 'react';

const Country = ({ country }) => {
    return (
        <article className="country ">
            <figure>
                <img src={country.flags.svg} alt="" className="flag " />
                <figcaption className="caption">
                    <h2 className="country__name">{country.name.common}</h2>
                    <h3 className="country__name">{!country.capital ? `No capital` : country.capital}</h3>
                    <p className="country__name">{country.population}</p>
                </figcaption>
            </figure>
        </article>
    );
};

export default Country;
