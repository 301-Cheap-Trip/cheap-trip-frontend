import React from 'react';
import './App.css';
import NewTripForm from './Components/NewTripForm/NewTripForm';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/About/About';
import SavedTripsPage from './Components/SavedTripsPage/SavedTripsPage';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTrip: {},
      tripList: [1, 2, 3, 4],
      userInformation: {},
      gasPrice: 3.505,
      receivedTripInfo: false,
      showUpdateModal: false,
      showViewModal: false
    }
  }

  componentDidMount() {
    this.getTrips();
  }

  closeNewTripModal = () => {
    this.setState({ receivedTripInfo: false })
  }

  getTrips = async () => {
    try {
      const tripsFromDatabase = await axios.get(`${process.env.REACT_APP_SERVER}/trips`);
      this.setState({ tripList: tripsFromDatabase.data });
    } catch (error) {
      console.log(error);
    }
  }

  handleDelete = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/trips/${id}`
      let deleteConfirmation = await axios.delete(url)
      console.log(deleteConfirmation)
    } catch (error) {
      console.log(error);
    }
    const unfilteredTrips = this.state.tripList;
    const filteredTrips = unfilteredTrips.filter(trip => trip._id !== id);
    this.setState({ tripList: filteredTrips })
  }

  handleUpdate = async (id, tripObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/trips/id`;
      let updateResponse = await axios.put(url, tripObj);
      const oldTripList = this.state.tripList;
      const updatedTripList = oldTripList.map(trip => {
        if (trip._id !== id) {
          return trip;
        } return updateResponse;
      }); this.setState({ tripList: updatedTripList })
    } catch (error) {

    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const currentTrip = {
      tripOrigin: event.target.tripOrigin.value,
      tripOriginState: event.target.tripOriginState.value,
      tripDestination: event.target.tripDestination.value,
      tripDestinationState: event.target.tripDestinationState.value,
      gasMileage: event.target.gasMileage.value

    }
    try {

      console.log('Origin>>>', event.target.tripOriginState.value)
      console.log('Dest>>>', event.target.tripDestinationState.value)
      let url = `${process.env.REACT_APP_SERVER}/directions?cityOne=${event.target.tripOrigin.value}&stateOne=${event.target.tripOriginState.value}&stateTwo=${event.target.tripDestinationState.value}&cityTwo=${event.target.tripDestination.value}`;

      console.log(url)
      let response = await axios.get(url);
      console.log(response.data);
      currentTrip.distance = response.data.distance;
      currentTrip.duration = response.data.duration;
      this.setState({
        currentTrip: currentTrip,
        receivedTripInfo: true
      })
    } catch (error) {
      console.log(error);
    }

  }

  handleSaveTrip = async () => {
    const tripList = [...this.state.tripList, this.state.currentTrip];
    let requestBody = this.state.currentTrip;
    requestBody.gasPrice = this.state.gasPrice;
    requestBody.username = 'HankHill';
    try {
      let response = await axios.post(`${process.env.REACT_APP_SERVER}/trips`, requestBody);
      console.log(response.data);
      this.setState({ tripList: tripList })
    } catch (error) {
      console.log(error)
    }
  }

  closeUpdateModal = () => {
    this.setState({showUpdateModal: false})
  }

  openUpdateModal = (tripObj) => {
    this.setState({
      showUpdateModal: true,
      updatingTrip: tripObj
    })
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className='App' >
          <Routes>
            <Route exact path='/' element={<NewTripForm
              handleSubmit={this.handleSubmit}
              currentTrip={this.state.currentTrip}
              receivedTripInfo={this.state.receivedTripInfo}
              closeNewTripModal={this.closeNewTripModal}
              gasPrice={this.state.gasPrice}
              handleSaveTrip={this.handleSaveTrip} />}> </Route>
            <Route exact path='/about' element={<Profile />}> </Route>
            <Route exact path='/saved-trips' element={
              <SavedTripsPage
                tripList={this.state.tripList}
                handleDelete={this.handleDelete}
                closeUpdateModal={this.closeUpdateModal}
                openUpdateModal={this.openUpdateModal}
                showUpdateModal={this.state.showUpdateModal}
                updatingTrip={this.state.updatingTrip}
              />}> </Route>
          </Routes>
        </div>
      </Router >
    )
  }
}
export default App;
