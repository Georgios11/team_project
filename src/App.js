import React, { useEffect, useReducer } from 'react';
import useFetch from './utils/useFetch';

//import './App.css';

import countryApi from './utils/apis_url';
import reducer from './utils/reducer';
import Header from './components/Header';
import Countries from './components/Countries';
import Footer from './components/Footer';
const API_URL = `${countryApi}/v3.1/all`;

function App() {
    const { data, isLoading, error } = useFetch(API_URL);
    const [countriesState, dispatch] = useReducer(reducer, { countries: data, displayed: data, error: null, isDescending: true });
    ///// how to do it properly ???
    useEffect(() => {
        if (data.length !== 0) {
            dispatch({ type: 'SET', payload: { countries: data } });
        }
        //countriesState.countries = data;
    }, [isLoading]);
    const handleSearch = (event) => {
        const input = event.target.value;

        const search = (country) => {
            return country.name.common.toLowerCase().includes(input.toLowerCase()) || (country.capital && country.capital[0].toLowerCase().includes(input.toLowerCase()));
        };

        dispatch({ type: 'SEARCH', payload: { displayed: countriesState.countries.filter(search) } });
    };
    const handleSort = () => {
        countriesState.displayed.sort((x, y) => {
            if (x.name.common.localeCompare(y.name.common) === 1) return countriesState.isDescending ? 1 : -1;
            if (x.name.common.localeCompare(y.name.common) === -1) return countriesState.isDescending ? -1 : 1;
        });

        dispatch({
            type: 'SORT',
            payload: {
                displayed: countriesState.displayed
            }
        });
    };
    return (
        <div>
            <Header />
            <main className="main">
                <input type={'text'} name={'search'} placeholder={'Search'} onChange={handleSearch} id="search"></input>
                <button name="sort" id="sort" onClick={handleSort}>
                    {'Sort ' + (countriesState.isDescending ? '⇩' : '⇧')}
                </button>
                {error && <h2>{error}</h2>}
                {isLoading && countriesState.displayed ? <span className="loading">Loading...</span> : <Countries countries={countriesState.displayed} />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
