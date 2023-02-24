import React, { useReducer } from 'react';
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

    const { countriesState, dispatch } = useReducer(reducer, { countries: data, error: null });

    //    dispatch({type:"ADD", payload: country });
    //    dispatch({type:"DELETE",payload: id})

    // countriesState.countries
    // name population capital flag continent

    //console.log(data);

    return (
        <div>
            <Header />
            <main className="main">
                {error && <h2>{error}</h2>}
                {isLoading && <span className="loading">Loading...</span>}
                {/* {data.length > 0 && console.log(data.slice(0, 10))} */}
                <Countries countries={data} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
