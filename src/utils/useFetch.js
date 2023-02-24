import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { ...state, data: action.payload.data, isLoading: false, error: null };
        case 'ERROR':
            return { ...state, data: [], isLoading: false, error: action.payload.error.message };
        case 'LOADING':
            return { ...state, isLoading: true };
        default:
            return false;
    }
};
export default function useFetch(url) {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    const [loading, dispatch] = useReducer(reducer, { data: [], isLoading: false, error: null });
    //const [{data,isLoading,error}]=useReducer(reducer, { data: [], isLoading: false, error: null });

    const getData = () => {
        //setIsLoading(true);
        dispatch({ type: 'LOADING' });

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch the data.');
                }
                return res.json();
            })
            .then((result) => {
                // setData(result);
                // setIsLoading(false);
                // setError(null);
                dispatch({ type: 'SUCCESS', payload: { data: result } });
            })
            .catch((error) => {
                // setData([]);
                // setIsLoading(false);
                // setError(error.message);
                dispatch({ type: 'ERROR', payload: { error: error } });
            });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getData();
    }, []);

    // return { data, isLoading, error };
    return { ...loading };
}
