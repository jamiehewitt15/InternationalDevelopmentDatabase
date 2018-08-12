import React, { Component } from 'react';

import { Button, Card, Elevation, Navbar, AnchorButton } from "@blueprintjs/core";


class Titlecard extends React.Component {
  
  state = {infogroup: 'Funding opportunities'}
  
  render() {

    const {infogroup} = this.state

    return (
 
<Card interactive={false}  style={{margin: 0, paddingBottom: 5}}>
    <div style={{textAlign: 'center'}}>
    <h1 style={{marginRight: 10, color: '#333', lineHeight: 1.5, fontSize: '50px', fontWeight: 100}}>{infogroup}</h1>

    <AnchorButton minimal style={{marginRight: 10}} type='Jobs' onClick={() => this.setState({infogroup: 'All Jobs'})}>
    Jobs
      </AnchorButton>
    <AnchorButton minimal style={{marginRight: 10}} type='Funding' onClick={() => this.setState({infogroup: 'Funding Opportunities'})}>
    Funding
      </AnchorButton>
    <AnchorButton minimal type='Companies' onClick={() => this.setState({infogroup: 'All Organisations'})}>
        Companies
      </AnchorButton>
   
     
</div>
</Card>
    );
  }
}

export default Titlecard;

