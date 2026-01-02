export const CARS = [
  {
    id: 1,
    brand: 'Maruti',
    color: 'White',
    model: 'Swift',
    services: [
      { name: 'Oil Change', cost: 500 },
      { name: 'Tire Replacement', cost: 2000 },
    ],
    owners: [
      { 
        name: 'Rahul', 
        contact: { email: 'rahul@example.com', phone: '1234567890' } 
      },
      { 
        name: 'Anita', 
        contact: { email: 'anita@example.com', phone: '0987654321' } 
      }
    ],
  },
  {
    id: 2,
    brand: 'Hyundai',
    color: 'Black',
    model: 'i20',
    services: [
      { name: 'Battery Check', cost: 800 },
      { name: 'AC Service', cost: 1200 },
    ],
    owners: [
      { 
        name: 'Ravi', 
        contact: { email: 'ravi@example.com', phone: '1112223333' } 
      }
    ],
  },
];

