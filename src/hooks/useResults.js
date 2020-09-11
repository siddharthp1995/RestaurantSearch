import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('yess, we found it !!');
        } catch (error) {
            console.log('error ->', error);
            setErrorMessage('ohh no, Something went wrong !!');
        }
    };

    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
}