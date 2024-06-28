import { useEffect, useState } from 'react';
import fetchData from '../api/apiService';
import { useDispatch } from 'react-redux';
import { addContact, setTotalPages } from '../redux/reducers/contactReducer';



const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
     
      let page = 1;
      let totalPagesResult = 1;

      while (page <= totalPagesResult) {
        const result = await fetchData(`/users?page=${page}`);
        if (result.total_pages) {
          totalPagesResult = result.total_pages;
          console.log(totalPagesResult)
        }
        const contactsWithFavorites = result.data.map(contact => ({
          ...contact,
          favorite: false,
        }));
        
        page++;
        dispatch(addContact(contactsWithFavorites));
      }

      dispatch(setTotalPages(totalPagesResult))
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  return { loading, error };
};

export default useFetch;
