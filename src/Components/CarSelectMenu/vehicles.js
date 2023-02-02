const vehicleData = require('../../vehicles.json')

const makes = [];
for (let carObj of vehicleData) {
  if (makes.indexOf(carObj.make) === -1) {
    makes.push(carObj.make);
  }
}

const makesSorted = makes.sort((a, b) => a > b ? 1 : -1)

console.log(makes)
console.log('hello');

export default makesSorted;