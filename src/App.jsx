import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (

    <>

      <Navbar expand="lg" className="bg-body-transparent">
        <Nav className="ms-auto m-3">
          {/* Replace the button with a Link to your LinkedIn profile */}
          <Button variant="outline-dark">
            <Link to="https://www.linkedin.com/in/arthana-manoj/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              Say Hello!!
            </Link>
          </Button>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
            <img className="image img-fluid" src="src/myimage.jpeg" alt="" />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <div className="d-flex flex-column align-items-center">
              <h2 className="do mt-2 mb-3">Hey, I'm <span id="name">Arthana</span></h2>
              <h5 className="ms-4 mb-4">Full Stack developer</h5>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>




        <Row className="justify-content-center">
          <Col md={8} className="mt-3">
            <p className="intro text-center text-justify">
              Transitioning from SAP expertise to the dynamic world of full-stack development, I bring a fresh perspective coupled with a strong foundation in problem-solving and analytical thinking. Eager to leverage my past experience in SAP to contribute effectively across the entire software development lifecycle, I'm ready to embark on this exciting journey of innovation and growth.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="mt-5">
            <h2 className="text-center do">What I can do?</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="mt-5">
            <h5>Develop what you need.</h5>
            <Card body className="mt-3">
              <Card.Text>
                <p className="intro">I'm a developer, so I know how to create your web applications to run across devices using the latest technologies available.</p>
                <p className="intro">Powered by JavaScript, ReactJS, VS Code, and coffee, I can bring your ideas to life.</p>
              </Card.Text>
            </Card>
          </Col>
          <Col md={4} className="mt-5 text-center">
            <img src="https://adoption.microsoft.com/wp-content/uploads/2022/05/business-user-icon.png" alt="" className="pic img-fluid" />
          </Col>
        </Row>

        {/* Carousel */}

        <Row className="justify-content-center">
          <Col xs={12} md={8} className="mt-5">
            <Carousel>
              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col xs={6} sm={3} md={3}>
                    <img src="src/js.png" alt="js" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" alt="vs" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                  <img src="src/html.png" alt="html" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <img src="https://jorgecolonconsulting.com/wp-content/uploads/React-Icon-Black.png" alt="react" className="img-car img-fluid" />
                  </Col>
                </Row>
              </Carousel.Item>
              {/* 2nd */}
              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col xs={6} sm={3} md={3}>
                  <img src="src/js.png" alt="js" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <img src="src/MUI.png" alt="mui" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <img src="src/html.png" alt="html" className="img-car img-fluid" />
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <img src="https://jorgecolonconsulting.com/wp-content/uploads/React-Icon-Black.png" alt="react" className="img-car img-fluid" />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>



        <Row className="justify-content-center">
          <Col md={8} className="mt-5 text-center mb-5">
            <Card style={{ width: '100%' }} className="gitback">
              <Card.Body>
                <Card.Title>
                  <h2 className="text-dark">GitHub</h2>
                </Card.Title>

                <Card.Text>
                  <div className='flex-column'>
                    <h6><FontAwesomeIcon icon={faGithub} size="3x" className='icon' style={{ color: 'white' }} /></h6>
                    <h6 className='text-git'>Find my open source projects and contributions in GitHub.</h6>
                  </div>

                </Card.Text>
                <Button variant="dark">
                  <Link to="https://github.com/ArthanaManoj15" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Projects
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* mail */}
        <Row className='mt-5'>
          <Col md={12}>
            <div className='d-flex justify-content-center'>
              <h6 className="text-center">Interested in collaborating or working together? We should queue up <br /> a chat. I’ll buy the coffee.</h6>
              {/* <Button variant="dark" className="ms-3 gmail-btn">Message me <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" className='gmail "ms-1"' /> </Button> */}

              <Button variant="dark" className='ms-3'>
                <Link to="mailto:arthanamanoj97@gmail.com" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Message me <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" className='gmail ms-1' />
                </Link>
              </Button>
            </div>
          </Col>

        </Row>

        {/* social media */}
        <Row className='mt-5'>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h5>#Let's connect.</h5>
            <hr />
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <FontAwesomeIcon icon={faInstagram} size='2xl' />
              <FontAwesomeIcon icon={faFacebook} size='2xl' />
              <FontAwesomeIcon icon={faTwitter} size='2xl' />
              <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </div>
          </Col>
        </Row>

        {/* download  */}
        <Row className="mt-5">
          <Col md={{ span: 4, offset: 4 }} className='text-center'>
            <Button variant="link" target="_blank" href="https://drive.google.com/file/d/1QdhgGdEkSBcqjFmP1NSsSfGO4iYwjH-i/view?usp=sharing" ><span className='text-dark'>Download CV</span></Button>
            <h6>© 2024 Arthana Manoj All rights reserved.</h6>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
