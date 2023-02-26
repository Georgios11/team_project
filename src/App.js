import React, { useEffect, useReducer } from 'react';
import useFetch from './utils/useFetch';
import { Link } from 'react-router-dom';
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
            dispatch({ type: 'SET', payload: { countries: data, displayed: data } });
        }
        //countriesState.countries = data;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);
    const handleSearch = (event) => {
        const input = event.target.value;

        const search = (country) => {
            return country.name.common.toLowerCase().includes(input.toLowerCase()) || (country.capital && country.capital[0].toLowerCase().includes(input.toLowerCase()));
        };

        dispatch({ type: 'SHOW', payload: { displayed: countriesState.countries.filter(search) } });
    };
    const handleSort = () => {
        // eslint-disable-next-line array-callback-return
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
    const handleDelete = (id) => {
        dispatch({ type: 'SET', payload: { countries: countriesState.countries.filter((country) => country.id !== id), displayed: countriesState.displayed.filter((country) => country.id !== id) } });
    };
    // eslint-disable-next-line no-unused-vars
    const handleAdd = () => {};
    return (
        <div>
            <Header />
            <main className="main">
                <nav className="navigation">
                    <input type={'text'} name={'search'} placeholder={'Search'} onChange={handleSearch} id="search"></input>
                    <button name="sort" id="sort" onClick={handleSort} className="btn">
                        {'Sort ' + (countriesState.isDescending ? '⇩' : '⇧')}
                    </button>
                    <Link to="/header" className="btn">
                        Link
                    </Link>
                </nav>

                {error && <h2>{error}</h2>}
                {isLoading && countriesState.displayed ? <span className="loading">Loading...</span> : <Countries countries={countriesState.displayed} handleDelete={handleDelete} />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
