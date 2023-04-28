import React, { useState } from 'react';
import toursData from './toursData.json';

function Tours() {
  const [tours, setTours] = useState(toursData);
  const [showInfo, setShowInfo] = useState({});

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const toggleInfo = (id) => {
    setShowInfo(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour.id} className="tour">
          <img src={tour.image} alt={tour.name} />
          <div className="tour-info">
            <h3>{tour.name}</h3>
            <h4>${tour.price}</h4>
            <p>{showInfo[tour.id] ? tour.info : `${tour.info.substring(0, 100)}...`}</p>
          </div>
          <button className="read-more" onClick={() => toggleInfo(tour.id)}>{showInfo[tour.id] ? 'Show Less' : 'Read More'}</button>
          <button className="delete-button" onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
}

export default Tours;
