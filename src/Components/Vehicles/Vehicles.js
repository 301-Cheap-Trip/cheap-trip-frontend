import React, { useState } from "react";
import './Vehicles.css'


const vehicleData = require('./vehicles.json');

// let makeData = [];

// makeData = vehicleData.filter((value, idx, self) =>
//   idx === self.findIndex((e) => (
//     e.make === value.make
//   ))
// )
// let makeArr = makeData.map(e => e.make)




function Vehicles() {

  const [{ make, model, year }, setData] = useState({
    make: "",
    model: "",
    year: 2023

  });

  const makes = vehicleData.map((e) => (
    <option key={e.make} value={e.make}>
      {e.make}
    </option>

  ));

  const models = vehicleData.find(e => e.make === make)?.vehicleData.map((e) => (
    <option key={e.model} value={e.model}>
      {e.model}
    </option>

  ));


  const years = vehicleData.find(e => e.model === model)?.vehicleData.map((e) => (
    <option key={e.year} value={e.year}>
      {e.year}
    </option>
  ));

function handleMakeChange(event) {
      setData(data => ({ year: 2023, model: '', make: event.target.value }));
    }

function handleModelChange(event) {
  setData(data => ({ ...data, year: 2023, model: event.target.value }));
}

function handleYearChange(event) {
  setData(data => ({ ...data, year: event.target.value }));
}

  return (
    <>
      <form>
        <h2>Miles Per Gallon Calculator</h2>
        <div>
          <select value={make} onChange={handleMakeChange}>
            {makes}
          </select>
        </div>

        <div>
          <select value={model} onChange={handleModelChange}>
            {models}
          </select>
        </div>

        <div>
          <select value={year} onChange={handleYearChange}>
            {years}
          </select>
        </div >
      </form>
    </>

  );
};

export default Vehicles;