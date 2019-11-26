import React from "react";
import "../App.css";
// import Cars from "./Components/Cars";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOnlyOldCars: false
    };
  }

  // this function toggles whether we show all cars or only show card older than 5 years. 
  toggleOldCarsOnly = e => {
    this.setState({
      showOnlyOldCars: !this.state.showOnlyOldCars
    });
  };

  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container>
            <h1>Add A Car</h1>
            <p>Add a car by entering the details in the form below.</p>
            <p>
              Edit existing car details by clicking on the Edit button.
            </p>
            <p>
              Please note that the "Model" field is required. 
            </p>
            <Button variant="outline-info" onClick={this.toggleOldCarsOnly}>
              View all cars older than 5 years
            </Button>
          </Container>
        </Jumbotron>
        <br></br>
        {/* <Cars showOnlyOldCars={this.state.showOnlyOldCars}></Cars> */}
      </div>
    );
  }
}

export default AddCar;
