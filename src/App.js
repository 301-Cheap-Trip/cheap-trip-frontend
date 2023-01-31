import React from 'react';
import './App.css';
import NewTripForm from './Components/NewTripForm/NewTripForm';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/About/About';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTrip: {},
      tripList: [],
      userInformation: {}
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      currentTrip: {
        tripOrigin: `event.target.tripOrigin.value`,
        tripDestination: event.target.tripDestination.value,
        gasMileage: event.target.gasMileage.value
      }
    })
    console.log(event.target.tripOrigin.value);
    console.log(this.state);
    try {
      let url = `${process.env.REACT_APP_SERVER}`;
      let response = await axios.get(url);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    return (
      <Router>
        <NavBar/>
        <div className='App' >
          <Routes>
            <Route exact path='/' element={<NewTripForm
              handleSubmit={this.handleSubmit} />} />
            <Route exact path='/about' element={<Profile/>} />
          </Routes>
        </div>
      </Router >
    )
  }
}
export default App;
