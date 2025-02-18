import { useState } from 'react';
import Tour from './Tour';

const Tours = ({ tours, getTours }) => {
  const [visibleTours, setVisibleTours] = useState(tours);

  const removeTour = (tourId) => {
    const updatedTours = visibleTours.filter((tour) => tour.id !== tourId);
    setVisibleTours(updatedTours);
  };

  return (
    <section className='tours'>
      {visibleTours.map((tour) => {
        return <Tour tour={tour} removeTour={removeTour} key={tour.id} />;
      })}
      {!visibleTours.length && (
        <button type='button' className='btn' onClick={getTours}>
          Get More Tours
        </button>
      )}
    </section>
  );
};

export default Tours;
