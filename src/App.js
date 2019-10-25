import React, { Component } from "react";
import "./App.css";
import { members } from "./members.json";
import Toggle from "./Toggle";
import { Card, CardTitle, CardImg, Row, Col, Nav, Navbar } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      members
    };
  }
  render() {
    const members = this.state.members.map((member, i) => {
      return (
        <React.Fragment key={member.signature}>
          <Row>
            <Col lg="12">
              <Card body outline color="primary" className="cartas container">
                <CardTitle tag="h3">{member.fullname}</CardTitle>
                <CardImg src={member.signature} alt="signature" />
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      );
    });

    return (
      <div className="App">
        <header>
          <Navbar color="dark" dark>
            <a href="#" className="text-white">
              MYtinerary Project Team
            </a>
          </Navbar>
        </header>
        <main className="information">
          <Toggle>{members}</Toggle>
        </main>
      </div>
    );
  }
}

export default App;
