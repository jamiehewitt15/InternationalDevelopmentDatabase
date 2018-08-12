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
        <input class="bp3-input" placeholder="Search files..." type="text" />
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="person" text="Login" />
    </Navbar.Group>
</Navbar>
    );
  }
}

export default Topnav;
