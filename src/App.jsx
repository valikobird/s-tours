import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleGetTours = () => {
    setIsLoading(true);
    fetchTours();
  };

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>Our Tours</h2>
          <div className='under'></div>
          <Tours tours={tours} getTours={handleGetTours} />
        </>
      )}
    </main>
  );
};
export default App;
