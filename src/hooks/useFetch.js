import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
    try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error en la petición");
        }

        const json = await response.json();
        setData(json);
    } 
    catch (err) 
    {
        setError(err.message);
    } 
    finally {
        setLoading(false);
    }
};

useEffect(() => {
    if (url) {
        fetchData();
    }
}, [url]);

return { data, loading, error, refetch: fetchData };
}

export default useFetch;