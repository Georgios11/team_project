import React from 'react';

const Country = ({ country }) => {
    return (
        <article className="card">
            <figure>
                <img src={country.flags.svg} alt="" className="flag " />
                <figcaption className="caption">
                    <h2 className="country__name">{country.name.common}</h2>
                </figcaption>
            </figure>
            <div class="card-content">
                <h2>Capital</h2>
                <h3 className="country__name">{!country.capital ? `No capital` : country.capital}</h3>
                <h4>Population</h4>
                <p className="country__population">{country.population}</p>
            </div>
            <button>Delete Country</button>
        </article>
    );
};

export default Country;
