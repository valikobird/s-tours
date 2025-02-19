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
    setIsLoading(true);

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

  const removeTour = (tourId) => {
    const updatedTours = tours.filter((tour) => tour.id !== tourId);
    setTours(updatedTours);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <h2 className='title'>No Tours Left</h2>
        <button type='button' className='btn' onClick={fetchTours}>
          Get More Tours
        </button>
      </main>
    );
  }

  return (
    <main>
      <h2 className='title'>Our Tours</h2>
      <div className='under'></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
