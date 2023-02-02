import React from "react";
import './CarSelectMenu.css';
import makes from "./vehicles";
import vehicleData from './vehicles.json'

class CarSelectMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      make: '',
      model: '',
      year: '',
      data: vehicleData,
      filteredModels: [],
      modelOptions: [1, 2,]
    }
  }

  removeModelDuplicates = (array) => {
    const tempArray = [];
    for (let item of array) {
      if (tempArray.indexOf(item.model) === -1) {
        tempArray.push(item.model);
      }
    } return tempArray.sort((a, b) => a > b ? 1 : -1)
  }

  removeYearDuplicates = (array) => {
    const tempArray = [];
    for (let item of array) {
      if (tempArray.indexOf(item.year) === -1) {
        tempArray.push(item.year);
      }
    } return tempArray.sort((a, b) => a > b ? 1 : -1)
  }

  handleMake = (event) => {
    console.log(vehicleData);
    const filteredModelsByMake = vehicleData.filter(carObj => carObj.make === event.target.value)
    console.log(filteredModelsByMake)
    const modelsNoDuplicates = this.removeModelDuplicates(filteredModelsByMake);
    console.log(modelsNoDuplicates)
    this.setState({
      make: event.target.value,
      filteredModels: filteredModelsByMake,
      modelOptions: modelsNoDuplicates
    })
  }

  handleModel = (event) => {
    const filtered = this.state.filteredModels.filter(model => model.model === event.target.value);
    console.log(filtered);
    const yearNoDuplicates = this.removeYearDuplicates(filtered)
    console.log(yearNoDuplicates);
    this.setState({ model: event.target.value, yearOptions: yearNoDuplicates })
  }

  render() {
    return (
      <div className="CarSelectMenu">
        <label style={{ color: 'white', marginRight: '5px' }} htmlFor="make">Manufacturer</label>
        <select onChange={this.handleMake} name="make" id="make" className="make">
          <option value=""></option>
          {makes.map(make => {
            return <option value={make}>{make}</option>
          })}
        </select>
        {this.state.make &&
          <select onChange={this.handleModel}>
            <option value=""></option>
            {this.state.modelOptions.map(model => {
              return (
                <option>{model}</option>
              )
            })}
          </select>}
        {this.state.model &&
          <select>
            <option value=""></option>
            {this.state.yearOptions.map(car => {
              return <option value={car}>{car.year}</option>
            })}
          </select>}
      </div>
    )
  }
}

export default CarSelectMenu;