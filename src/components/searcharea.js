import React, { Component } from 'react';
import Titlecard from './titlearea.js'
import Searchapp from './search/Searchapp.js'
import {
    Card, 
    Elevation, 
    Tag,
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Icon,
} from "@blueprintjs/core";

class Searcharea extends React.Component {
  
state = {searchbarheight: ''}


  render() {

    const {searchbarheight} = this.state

    return (
 
<Card  style={{marginTop: 20, marginLeft: '20%', marginRight: '20%', paddingRight: 0, paddingLeft: 0, paddingBottom: 0}}> 
   
   
      <div style={{paddingLeft: 20, paddingRight: 20 }} onClick={() => this.setState({searchbarheight: 
        <div style={{marginBottom: -20}}>
        <Searchapp/>
        </div>})}>
          <Icon icon="search" style={{marginRight: 10}}/>
          <span class="bp3-tag .bp3-large">
          All data
          <button class="bp3-tag-remove"></button>
          </span>
      </div>
 
 
<div >
{searchbarheight}
</div>



<Navbar style={{marginTop: 20, background: '#f9fafb'}}>
    <Navbar.Group align={Alignment.CENTER}>
        <Button className="bp3-minimal" text="Sector" />
        <Navbar.Divider />
        <Button className="bp3-minimal" text="Country" />
        <Navbar.Divider />
        <Button className="bp3-minimal" text="Organisation" />
        <Navbar.Divider />
        <Button className="bp3-minimal" text="Funding" />
        <Navbar.Divider />
        <Button className="bp3-minimal" text="Project Length" />
        <Navbar.Divider />
        </Navbar.Group>
        
        
</Navbar>
</Card>
    );
  }
}

export default Searcharea;

