import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000/trains'; 
function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.error('Error fetching train data:', error));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Train Schedule</h1>
      <div className="row">
        {trains.map((train) => (
          <div key={train.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{train.name}</h5>
                <p className="card-text">Departure Time: {train.departureTime}</p>
                <p className="card-text">Delay: {train.delayMinutes} minutes</p>
                <p className="card-text">Sleeper Availability: {train.seatAvailability.sleeper}</p>
                <p className="card-text">AC Availability: {train.seatAvailability.ac}</p>
                <p className="card-text">Sleeper Price: ${train.pricing.sleeper}</p>
                <p className="card-text">AC Price: ${train.pricing.ac}</p>
                <Link to={`/train/${train.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTrains;
