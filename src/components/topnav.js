import React, { Component } from 'react';

import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";


class Topnav extends React.Component {
  render() {
    return (
<Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Sustainable Action</Navbar.Heading>
        <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
        
        <Navbar.Divider />
        
        <Button className="bp3-minimal" icon="person" text="Login" />
    </Navbar.Group>
</Navbar>
    );
  }
}

export default Topnav;
