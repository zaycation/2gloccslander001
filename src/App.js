import React from "react";
import SitewideNavbar from "./components/NavbarComp";
import BackgroundVideo from "./components/bgvideo";
import "./App.css";
import { Col, Row, Container } from "reactstrap";

function App() {
  return (
    <Container fluid={true} id="container">
      <Row>
        <Col>
          <div>
            <SitewideNavbar />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <BackgroundVideo />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
