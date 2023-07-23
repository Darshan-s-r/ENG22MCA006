const express = require('express');
const app = express();
const trainsData = require('./trains.js'); 


app.get('/trains', (req, res) => {
  const currentTime = new Date();
  const twelveHoursLater = new Date();
  twelveHoursLater.setHours(twelveHoursLater.getHours() + 12);

  const filteredTrains = trainsData.filter((train) => {
    return train.departureTime >= currentTime && train.departureTime <= twelveHoursLater && train.delayMinutes <= 30;
  });

  // Sort trains based on price(ascending), tickets(descending), and departure time(descending)
  filteredTrains.sort((a, b) => {
    const priceDiff = a.pricing.ac - b.pricing.ac;
    if (priceDiff !== 0) {
      return priceDiff;
    }
    const ticketDiff = b.seatAvailability.sleeper + b.seatAvailability.ac - (a.seatAvailability.sleeper + a.seatAvailability.ac);
    if (ticketDiff !== 0) {
      return ticketDiff;
    }
    return b.departureTime - a.departureTime;
  });

  res.json(filteredTrains);
});

app.get('/trains/:trainId', (req, res) => {
  const trainId = parseInt(req.params.trainId);
  const train = trainsData.find((train) => train.id === trainId);

  if (!train) {
    return res.status(404).json({ message: 'Train not found' });
  }

  res.json(train);
});

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
