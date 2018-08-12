import React, { Component } from 'react';

import { Button, Card, Elevation } from "@blueprintjs/core";
import { STATIONS } from './fundingdata.js';

class Infocard extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {

    return (
 
<Card interactive={true} elevation={Elevation.TWO}>
    <h5><a href="#">{this.props.stationName}</a></h5>
    <p>United Nations Development Programme</p>
    <Button>Apply</Button>
</Card>
    );
  }
}

export default Infocard;
