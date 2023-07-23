import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5000/trains'; 

function SingleTrain() {
  const [train, setTrain] = useState(null);
  const { trainId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${trainId}`)
      .then((response) => response.json())
      .then((data) => setTrain(data))
      .catch((error) => console.error('Error fetching single train data:', error));
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4">
      <h1>{train.name}</h1>
      <p>Departure Time: {train.departureTime}</p>
      <p>Delay: {train.delayMinutes} minutes</p>
      <p>Sleeper Availability: {train.seatAvailability.sleeper}</p>
      <p>AC Availability: {train.seatAvailability.ac}</p>
      <p>Sleeper Price: ${train.pricing.sleeper}</p>
      <p>AC Price: ${train.pricing.ac}</p>
    </div>
  );
}

export default SingleTrain;
