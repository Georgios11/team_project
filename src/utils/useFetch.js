import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = () => {
        setIsLoading(true);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch the data.');
                }
                return res.json();
            })
            .then((result) => {
                setData(result);
                setIsLoading(false);
                setError(null);
            })
            .catch((error) => {
                setData([]);
                setIsLoading(false);
                setError(error.message);
            });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getData(), []);

    return { data, isLoading, error };
}
