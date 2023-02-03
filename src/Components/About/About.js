import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css';
import dominickPhoto from './img/dominickMartin.jpeg';
import melPhoto from './img/melJohnston.jpg';
import tylerPhoto from './img/tylerBennett.jpg';
import jordanPhoto from './img/jordanCovington.jpg';
import marcusPhoto from './img/marcusBynoe.jpg';



class Profile extends Component {
  render() {
    return (
      <div className="profile-cards">
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={dominickPhoto} />
          <Card.Body>
            <Card.Title>Dominick Martin</Card.Title>
            <Card.Text className="card-text">
               With a strong foundation in programming languages and experience working on projects in a team environment, Dominick is eager to bring his skills and enthusiasm to a new role as a software developer. He is confident in his ability to learn quickly and is dedicated to continuously improving his abilities to deliver high-quality software. -ChatGPT
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/Dommcat"><i className="icons-link fa-brands fa-github"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/dominickmartin/"><i class="icons-link fa-brands fa-linkedin"></i></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={melPhoto} />
          <Card.Body>
            <Card.Title>Melanie Johnston</Card.Title>
            <Card.Text className="card-text">
              I was previously a Russian linguist in the Air Force for about nine years. I enjoy learning languages and
              also building things from scratch. I started a web developer course on Udemy and it seemed like the perfect fit. Although I am looking forward to all the aspects of web development, I really want to focus as a front end web dev.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/mel-johnston"><i className="icons-link fa-brands fa-github"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/mel-johnston"><i class="icons-link fa-brands fa-linkedin"></i></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={jordanPhoto} />
          <Card.Body>
            <Card.Title>Jordan Covington</Card.Title>
            <Card.Text className="card-text">
              My name is Jordan Covington. I am from Campobello, South Carolina and am currently living at Joint Base Lewis-McChord, Washington with my wife, who is active duty Air Force, and my 2 daughters. I have a degree in Computer Information Systems and Business Administration from McKendree University. I am currently enrolled at Code Fellows to transition my career into web development.
            </Card.Text>
            <Card.Link href="https://github.com/JMCov"><i className="icons-link fa-brands fa-github"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/jordan-covington-05583a257/"><i class="icons-link fa-brands fa-linkedin"></i></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={marcusPhoto} />
          <Card.Body>
            <Card.Title>Marcus Bynoe</Card.Title>
            <Card.Text className="card-text">
              Marcus Bynoe: Id veniam dolor incididunt culpa velit excepteur proident minim cupidatat. Cillum proident quis est cillum cillum fugiat proident nisi officia voluptate quis laboris. Nostrud nostrud cillum dolor fugiat ea do occaecat ex adipisicing ex incididunt excepteur. Eiusmod excepteur cupidatat aute eiusmod minim sit. Irure occaecat amet fugiat aliqua do. Deserunt dolor dolor officia in minim labore sunt et sunt consectetur mollit ut.
            </Card.Text>
            <Card.Link href="https://github.com/marcusbynoe"><i className="icons-link fa-brands fa-github"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/marcusbynoe"><i class="icons-link fa-brands fa-linkedin"></i></Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={tylerPhoto} />
          <Card.Body>
            <Card.Title>Tyler Bennett</Card.Title>
            <Card.Text className="card-text">
              I'm an Air Force veteran and aspiring software developer. I'm excited to learn how to build useful things and make them look beautiful too.
            </Card.Text>
            <Card.Link href="https://github.com/tyler-bennett52"><i className="icons-link fa-brands fa-github"></i></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/tyler-bennett-608928108/"><i class="icons-link fa-brands fa-linkedin"></i></Card.Link>
          </Card.Body>
        </Card>
      </div>




    );
  }
}

export default Profile;
