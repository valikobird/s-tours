import { useRef, useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const { image, info, name, price } = tour;

  const READ_MORE = 'Read More';
  const READ_LESS = 'Read Less';
  const CLASS_EXPANDED = 'expanded';

  const [isExpanded, setIsExpanded] = useState(false);
  const infoRef = useRef(null);

  const handleReadToggle = (e) => {
    e.preventDefault();

    if (!isExpanded) {
      infoRef.current.className += ` ${CLASS_EXPANDED}`;
    } else {
      infoRef.current.className = infoRef.current.className
        .split(' ')
        .filter((item) => item !== CLASS_EXPANDED)
        .join(' ');
    }
    setIsExpanded(!isExpanded);
  };

  const handleNotInterestedClick = (e) => {
    removeTour(e.target.id);
  };

  return (
    <article>
      <img src={image} alt={name} />
      <span className='price'>${price}</span>
      <div className='details'>
        <h5 className='name'>{name}</h5>
        <p className='infoWrapper'>
          <span className='info' ref={infoRef}>
            {info}
          </span>
          <a href='#' className='readToggle' onClick={handleReadToggle}>
            {isExpanded ? READ_LESS : READ_MORE}
          </a>
        </p>
        <button
          type='button'
          className='btn'
          onClick={handleNotInterestedClick}
          id={tour.id}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
