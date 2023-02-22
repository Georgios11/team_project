import React from 'react';
import useFetch from './utils/useFetch';
import './App.css';

const API_URL = 'https://restcountries.com/v3.1/all';

function App() {
    const fetchData = useFetch(API_URL);
    const data = fetchData.data;
    const { isLoading, error } = fetchData;
    return (
        <div>
            {error ? <h2>{error}</h2> : ''}
            {isLoading ? <span className="loading">Loading...</span> : ''}
            {data.length > 0 ? console.log(data.slice(0, 10)) : ''}
        </div>
    );
}

export default App;
