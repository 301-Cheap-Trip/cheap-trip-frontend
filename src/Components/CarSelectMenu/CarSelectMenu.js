import React from "react";
import './CarSelectMenu.css';
import makes from "./vehicles";
import vehicleData from './vehicles.json'

class CarSelectMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userCar: '',
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

  handleYear = (event) => {
    let userCar = {}
  for (let carObj of vehicleData) {
    if (carObj.make === this.state.make) {
      if (carObj.model === this.state.model){
        if (carObj.year === +event.target.value) {
          userCar = carObj
        }
      }
    }
  }
  this.props.handleGasMileage(userCar.highwayMPG);
  this.setState({year: event.target.value, userCar: userCar});
  this.props.appHandleGasMileage(userCar.highwayMPG);
}

  render() {
    return (
      <div className="CarSelectMenu">
        <label style={{ color: 'white', marginRight: '5px' }} htmlFor="make">Make</label>
        <select onChange={this.handleMake} name="make" id="make" className="make">
          <option value=""></option>
          {makes.map(make => {
            return <option value={make}>{make}</option>
          })}
        </select>
        {this.state.make &&
          <div>
            <label htmlFor="model">Model</label>
          <select id="model" onChange={this.handleModel}>
            <option value=""></option>
            {this.state.modelOptions.map(model => {
              return (
                <option>{model}</option>
              )
            })}
          </select></div>}
        {this.state.model &&
        <div>
          <label htmlFor="year">Year<span className='spacer' ></span></label>
          <select id="year" onChange={this.handleYear}>
            <option value=""></option>
            {this.state.yearOptions.map(car => {
              return <option value={car}>{car}</option>
            })}
          </select></div>}
          {this.state.userCar &&
          <p>Your car gets {this.state.userCar.highwayMPG} miles to the gallon</p>}
      </div>
    )
  }
}

export default CarSelectMenu;