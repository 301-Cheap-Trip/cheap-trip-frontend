import React from 'react';
import './App.css';
import NewTripForm from './Components/NewTripForm/NewTripForm';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/About/About';
import SavedTripsPage from './Components/SavedTripsPage/SavedTripsPage';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";
const gasData = require('./Gas Price.json');

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
      showViewModal: false,
      showSavedTripModal: false,
      updatingTrip: {},
      savedTripModalDetails: {
      }
    }
  }

  componentDidMount() {
    this.getTrips();
    // console.log(process.env.REACT_APP_LOCATIONIQ_API_KEY)
  }

  closeNewTripModal = () => {
    this.setState({ receivedTripInfo: false })
  }

  getTrips = async () => {
    if (this.props.auth0.isAuthenticated) {
      const authResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = authResponse.__raw;

      // console.log('token: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/trips'
      }
      const tripsFromDatabase = await axios(config);
      this.setState({ tripList: tripsFromDatabase.data });

    }
  }

  handleDelete = async (id) => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const authResponse = await this.props.auth0.getIdTokenClaims();
        const jwt = authResponse.__raw;
        // console.log('token: ', jwt);
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/trips/${id}`
        }
        let deleteConfirmation = await axios(config);
        console.log(deleteConfirmation)
      }
    } catch (error) {
      console.log(error);
    }
    const unfilteredTrips = this.state.tripList;
    const filteredTrips = unfilteredTrips.filter(trip => trip._id !== id);
    this.setState({ tripList: filteredTrips })
  }

  handleUpdate = async (event, id, tripInfo) => {
    event.preventDefault();
    // console.log(id);
    const tripObj = {
      duration: (event.target.tripDuration.value * 60),
      distance: (event.target.tripDistance.value * 1609.34),
      tripOrigin: (event.target.tripOrigin.value),
      tripDestination: (event.target.tripDestination.value),
      gasPrice: (event.target.gasPrice.value),
      gasMileage: (event.target.gasMileage.value),
      imageURL: tripInfo.imageURL
    }
    try {
      if (this.props.auth0.isAuthenticated) {
        const authResponse = await this.props.auth0.getIdTokenClaims();
        const jwt = authResponse.__raw;
        // console.log('token: ', jwt);
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'put',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/trips/${id}`,
          data: tripObj
        }
        let updateResponse = await axios(config);
        const oldTripList = this.state.tripList;
        const updatedTripList = oldTripList.map(trip => {
          if (trip._id !== id) {
            return trip;
          } return updateResponse.data;
        }); this.setState({ tripList: updatedTripList, showUpdateModal: false })
      }
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
    const gasPriceOrigin = gasData.filter(e => e.stAbr === currentTrip.tripOriginState)[0].regular
    const gasPriceDest = gasData.filter(e => e.stAbr === currentTrip.tripDestinationState)[0].regular
    const averageGasPrice = ((gasPriceDest+gasPriceOrigin)/2).toFixed(2);
    currentTrip.gasPrice = averageGasPrice
   
    try {

      if (this.props.auth0.isAuthenticated) {
        const authResponse = await this.props.auth0.getIdTokenClaims();

        const jwt = authResponse.__raw;
        // console.log('token: ', jwt);
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/directions?cityOne=${event.target.tripOrigin.value}&stateOne=${event.target.tripOriginState.value}&stateTwo=${event.target.tripDestinationState.value}&cityTwo=${event.target.tripDestination.value}`
        }
        console.log(config.url)
        let response = await axios(config);


        const tripWithLatLongs = { ...currentTrip, ...response.data, imageURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data.centerLat},${response.data.centerLon}&size=600x600&zoom=18&markers=icon:small-orange-cutout%7C${response.data.originLat},${response.data.originLon}%7C${response.data.destLat},${response.data.destLon}` }


        this.setState({
          currentTrip: tripWithLatLongs,
          receivedTripInfo: true,
          gasPrice: averageGasPrice
        })
      }

    } catch (error) {
      console.log(error);
    }

  }

  handleSaveTrip = async () => {
    const tripList = [...this.state.tripList, this.state.currentTrip];
    let requestBody = this.state.currentTrip;
    requestBody.gasPrice = this.state.gasPrice;
    try {
      if (this.props.auth0.isAuthenticated) {
        const authResponse = await this.props.auth0.getIdTokenClaims();
        const jwt = authResponse.__raw;
        // console.log('token: ', jwt);
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'post',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/trips',
          data: requestBody
        }
        let response = await axios(config);
        console.log(response.data);
        this.setState({ tripList: tripList, receivedTripInfo: false })
      }
    } catch (error) {
      console.log(error)
    }
  }



  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false })
    // console.log(this.state.updatingTrip)
  }

  openUpdateModal = (tripObj) => {
    this.setState({
      showUpdateModal: true,
      updatingTrip: tripObj
    })
  }

  closeSavedTripModal = () => {
    this.setState({showSavedTripModal: false, savedTripModalDetails: {}})
  }

  openSavedTripModal = (tripObj) => {
    console.log(tripObj)
    this.setState({showSavedTripModal: true, savedTripModalDetails: tripObj})
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
                handleUpdate={this.handleUpdate}
                closeUpdateModal={this.closeUpdateModal}
                openUpdateModal={this.openUpdateModal}
                showUpdateModal={this.state.showUpdateModal}
                updatingTrip={this.state.updatingTrip}
                getTrips={this.getTrips}
                savedTripModalDetails={this.state.savedTripModalDetails}
                showSavedTripModal={this.state.showSavedTripModal}
                openSavedTripModal={this.openSavedTripModal}
                closeSavedTripModal={this.closeSavedTripModal}
              />}> </Route>
          </Routes>
        </div>
      </Router >
    )
  }
}
export default withAuth0(App);
