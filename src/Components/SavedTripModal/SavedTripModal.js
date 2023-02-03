import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './SavedTripModal.js';

class SavedTripModal extends React.Component {
  render() {
    let distanceMiles = Math.floor(this.props.currentTrip.distance / 1609.34);
    let gasMileage = this.props.currentTrip.gasMileage;
    let gasPrice = this.props.currentTrip.gasPrice;
    let tripDuration = this.props.currentTrip.duration;
    let minutes = Math.round((tripDuration % 3600) / 60);
    let hours = (tripDuration - (tripDuration % 3600)) / 3600;
    return (
      <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={this.props.show}
    >
      <Modal.Header style={{backgroundColor: '#0B2827', color: '#d9d9d9', borderBottom: 'none', fontFamily: 'righteous'}}>
        <Modal.Title style={{ alignText: 'center', margin: '0 auto', fontSize: '2rem' }} id="contained-modal-title-vcenter">
          {this.props.currentTrip.tripOrigin} - {this.props.currentTrip.tripDestination}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid' style={{backgroundColor: '#0B2827', color: '#D9D9D9'}}>
        <Container>
          <Row>
          <Col>
            <ul className='tripInfo'> <u>Trip Information</u>
              <li>One way drive time - {hours} hours {minutes} minutes</li>
              <li>One way distance - {distanceMiles} miles</li>
              <li>Gas Mileage - {gasMileage} mpg</li>
              <li>Average Gas Price - {gasPrice}</li>
              <li>Total Gas Cost One Way- ${((distanceMiles / +gasMileage) * gasPrice).toFixed(2)}</li>
              <li>Total Gas Cost Round Trip- ${((distanceMiles / +gasMileage) * gasPrice).toFixed(2) * 2}</li>
            </ul>
          </Col>
          <Col>
          <img src={this.props.currentTrip.imageURL} alt={`${this.props.currentTrip.tripOrigin} to ${this.props.currentTrip.tripDestination}`} className="map-img"/>
          </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: '#0B2827', borderTop: 'none'}}>
        <Button variant='secondary' onClick={this.props.closeSavedTripModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default SavedTripModal;