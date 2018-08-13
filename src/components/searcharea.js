import React, { Component } from 'react';
import Titlecard from './titlearea.js'
import Searchapp from './search/Searchapp.js'
import Searchmenu from './search/Searchmenu.js'
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
    Popover,
    Menu,
    MenuItem,
} from "@blueprintjs/core";

class Searcharea extends React.Component {
  
state = {searchbar: ''}


  render() {

    const {searchbar} = this.state

    return (
 
<Card  style={{marginTop: 20, marginLeft: '20%', marginRight: '20%', paddingRight: 0, paddingLeft: 0, paddingBottom: 0}}> 
   <div style={{paddingLeft: 20, paddingRight: 20 }}>
   <Searchapp />
   </div>
   
      <div style={{paddingLeft: 20, paddingRight: 20 }} onClick={() => this.setState({searchbar: 
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
{searchbar}
</div>



</Card>
    );
  }
}

export default Searcharea;

