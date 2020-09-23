const availableTrucks = [
  {
    name: 'Dry Van',
    letter: 'A',
    dimensions: {
      lengthInches: 43,
      widthInches: 36
    },
    location: {
      city: 'Grand Rapids',
      state: 'Michigan'
    },
    hasLiftGate: false,
    description: "Suitable for long distance trips."
  },

  {
    name: 'Small Straight',
    letter: 'B',
    dimensions: {
      lengthInches: 47,
      widthInches: 23
    },
    location: {
      city: "Kevin's Jewett Room",
      state: 'The Pough'
    },
    hasLiftGate: false,
    description: "This truck is old. It's as old as Kevin."
  },

  {
    name: 'Large Straight',
    letter: 'C',
    dimensions: {
      lengthInches: 43,
      widthInches: 36
    },
    location: {
      city: 'Grand Rapids',
      state: 'Michigan'
    },
    hasLiftGate: true,
    description: "Not Suitable for long distance trips"
  },

  {
    name: 'Large Straight',
    letter: 'D',
    dimensions: {
      lengthInches: 43,
      widthInches: 36
    },
    location: {
      city: 'Grand Rapids',
      state: 'Michigan'
    },
    hasLiftGate: false,
    description: "Suitable for long distance trips"
  },

  {
    name: 'Semi Truck',
    letter: 'E',
    dimensions: {
      lengthInches: 39,
      widthInches: 23
    },
    location: {
      city: 'Grand Rapids',
      state: 'Michigan'
    },
    hasLiftGate: false,
    description: "Suitable for fast and urgent distance trips"
  }
];

export default availableTrucks;
