// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

    const getData = async () => {
        //setIsLoading(true);
        dispatch({ type: 'LOADING' });
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                throw new Error('Failed to fetch the data.');
            }
            dispatch({
                type: 'SUCCESS',
                payload: {
                    data: data.map((country) => {
                        return { ...country, id: uuidv4() };
                    })
                }
            });
        } catch (error) {
            dispatch({ type: 'ERROR', payload: { error: error } });
        }

        // fetch(url)
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error('Failed to fetch the data.');
        //         }
        //         return res.json();
        //     })
        //     .then((result) => {
        //         // setData(result);
        //         // setIsLoading(false);
        //         // setError(null);
        //         dispatch({ type: 'SUCCESS', payload: { data: result } });
        //     })
        //     .catch((error) => {
        //         // setData([]);
        //         // setIsLoading(false);
        //         // setError(error.message);
        //         dispatch({ type: 'ERROR', payload: { error: error } });
        //     });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // return { data, isLoading, error };
    return { ...loading };
}
