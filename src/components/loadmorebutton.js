import React, { Component } from 'react';
import { Button, Classes, Code, H3, H5, Intent, Overlay, Switch } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";



const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";

export interface IOverlayExampleState {
    autoFocus: boolean;
    canEscapeKeyClose: boolean;
    canOutsideClickClose: boolean;
    enforceFocus: boolean;
    hasBackdrop: boolean;
    isOpen: boolean;
    usePortal: boolean;
}

class Loadmorebutton extends React.Component {

 state: OverlayState = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        isOpen: false,
        usePortal: true,
    };

  render() {

    return (
    <Example  >
    <div>
    
    <Button text="Show overlay" onClick={this.handleOpen} />
    <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}>
        Overlaid contents...
    </Overlay>
    </div>
    </Example>
    );
  }
  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });
}

export default Loadmorebutton;

