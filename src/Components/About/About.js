import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dominickPhoto from './img/DominickMartin.jpeg';
import melPhoto from './img/melJohnston.jpg';
import tylerPhoto from './img/tylerBennett.jpg';

class Profile extends Component {


  // Group Members - Dominick Martin, Melanie Johnston, Jordan Covington, Marcus Bynoe, Tyler Bennett
  // Card Format Example:

  render() {
    return (
      
<div>
      {/* //*******Dominick Martin 1/5 */}

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dominickPhoto} />
        <Card.Body>
          <Card.Title>Dominick Martin</Card.Title>
          <Card.Text>
            Dominick Martin is a recent graduate of CodeFellows and has a passion for developing innovative software solutions. With a strong foundation in programming languages and experience working on projects in a team environment, Dominick is eager to bring his skills and enthusiasm to a new role as a software developer. He is confident in his ability to learn quickly and is dedicated to continuously improving his abilities to deliver high-quality software.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/Dommcat">GitHub Page</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/dominickmartin/">Linkedin Page</Card.Link>
        </Card.Body>
      </Card>
      



      {/* //*******Melanie Johnston 2/5 */}

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={melPhoto} />
        <Card.Body>
          <Card.Title>Melanie Johnston</Card.Title>
          <Card.Text>
            Melanie Johnston: Voluptate voluptate quis amet do. Laborum est do ullamco in do. Minim aliqua minim in commodo consequat labore consectetur. Lorem eu id aliqua aliqua nisi. Nostrud quis est est aliqua incididunt. Voluptate aliquip ipsum esse proident ea adipisicing culpa do nostrud consequat in. Sint consectetur esse non aliquip et.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Here goes Linkedin Page</Card.Link>
          <Card.Link href="#">Here Goes GitHub Page</Card.Link>
        </Card.Body>
      </Card>
      


      {/* //******* Jordan Covington 3/5 */}

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Jordan Covington</Card.Title>
          <Card.Text>
            Jordan Covington: Aliquip occaecat minim in anim proident. Reprehenderit sit ut fugiat eiusmod velit deserunt voluptate proident proident laborum. Voluptate excepteur ad nulla aute adipisicing voluptate duis. Ad amet commodo laboris sint sint consequat proident nulla eiusmod ullamco amet fugiat enim nulla.
          </Card.Text>
          {/* </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  <Card.Body> */}
          <Card.Link href="#">Here goes Linkedin Page</Card.Link>
          <Card.Link href="#">Here Goes GitHub Page</Card.Link>
        </Card.Body>
      </Card>

      



      {/* //******* Marcus Bynoe 4/5 */}

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Marcus Bynoe</Card.Title>
          <Card.Text>
            Marcus Bynoe: Id veniam dolor incididunt culpa velit excepteur proident minim cupidatat. Cillum proident quis est cillum cillum fugiat proident nisi officia voluptate quis laboris. Nostrud nostrud cillum dolor fugiat ea do occaecat ex adipisicing ex incididunt excepteur. Eiusmod excepteur cupidatat aute eiusmod minim sit. Irure occaecat amet fugiat aliqua do. Deserunt dolor dolor officia in minim labore sunt et sunt consectetur mollit ut.
          </Card.Text>
          {/* </Card.Body>
     <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  <Card.Body> */}
          <Card.Link href="#">Here goes Linkedin Page</Card.Link>
          <Card.Link href="#">Here Goes GitHub Page</Card.Link>
        </Card.Body>
      </Card>

      

      {/* //******* Tyler Bennett 5/5 */}

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tylerPhoto} />
        <Card.Body>
          <Card.Title>Tyler Bennett</Card.Title>
          <Card.Text>
            Tyler Bennett: Id veniam dolor incididunt culpa velit excepteur proident minim cupidatat. Cillum proident quis est cillum cillum fugiat proident nisi officia voluptate quis laboris. Nostrud nostrud cillum dolor fugiat ea do occaecat ex adipisicing ex incididunt excepteur. Eiusmod excepteur cupidatat aute eiusmod minim sit. Irure occaecat amet fugiat aliqua do. Deserunt dolor dolor officia in minim labore sunt et sunt consectetur mollit ut.
          </Card.Text>
          {/* </Card.Body>
<ListGroup className="list-group-flush">
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
<Card.Body> */}
          <Card.Link href="#">Here goes Linkedin Page</Card.Link>
          <Card.Link href="#">Here Goes GitHub Page</Card.Link>
        </Card.Body>
      </Card>


      </div>




    );
  }
}

export default Profile;


