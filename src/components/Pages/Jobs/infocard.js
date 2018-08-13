import React, { Component } from 'react';

import { Button, Card, Elevation } from "@blueprintjs/core";
import { FUNDINGDATA } from './data/funding-data.js';
import { Grid, Row, Col } from 'react-bootstrap';


class Infocard extends React.Component {



  render() {

    return (
 
    
        <div>

        {FUNDINGDATA.slice(0, 25).map(item => 
          <div key={item.id}>
          <Card interactive={true} elevation={Elevation.TWO} style={{margin: 5, padding: 10, paddingLeft: 20}}>
           <h5><a href="#">{item.organisation}</a></h5>
           <h6>{item.type}</h6>
           <p>{item.title}</p>
           <Button>Apply</Button>
          </Card>
          </div>)}
      </div>

    );
  }
}

export default Infocard;

