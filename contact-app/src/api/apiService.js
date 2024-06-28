

const API_URL = 'https://reqres.in/api';

const fetchData = async (endpoint ='/users?page=2' ) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    console.log('RUTA API', endpoint)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
   
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;