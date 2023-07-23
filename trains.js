
  const trainsData = [
    {
      id: 1,
      name: 'Express Train 1',
      departureTime: new Date('2023-07-23T08:00:00'),
      delayMinutes: 10,
      seatAvailability: {
        sleeper: 45,
        ac: 18,
      },
      pricing: {
        sleeper: 550,
        ac: 1050,
      },
    },
    {
      id: 2,
      name: 'Fast Train 2',
      departureTime: new Date('2023-07-23T10:30:00'),
      delayMinutes: 0,
      seatAvailability: {
        sleeper: 60,
        ac: 30,
      },
      pricing: {
        sleeper: 600,
        ac: 1200,
      },
    },
    {
      id: 3,
      name: 'Super Express 3',
      departureTime: new Date('2023-07-23T13:15:00'),
      delayMinutes: 5,
      seatAvailability: {
        sleeper: 40,
        ac: 15,
      },
      pricing: {
        sleeper: 480,
        ac: 950,
      },
    },
    {
      id: 4,
      name: 'Luxury Express 4',
      departureTime: new Date('2023-07-23T15:45:00'),
      delayMinutes: 0,
      seatAvailability: {
        sleeper: 55,
        ac: 25,
      },
      pricing: {
        sleeper: 580,
        ac: 1100,
      },
    },
    {
      id: 5,
      name: 'Rapid Train 5',
      departureTime: new Date('2023-07-23T18:20:00'),
      delayMinutes: 15,
      seatAvailability: {
        sleeper: 38,
        ac: 12,
      },
      pricing: {
        sleeper: 520,
        ac: 1000,
      },
    },
    {
      id: 6,
      name: 'Express Connect 6',
      departureTime: new Date('2023-07-23T20:00:00'),
      delayMinutes: 0,
      seatAvailability: {
        sleeper: 60,
        ac: 30,
      },
      pricing: {
        sleeper: 600,
        ac: 1150,
      },
    },
  ];
  
  module.exports = trainsData;
  