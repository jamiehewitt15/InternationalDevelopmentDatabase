import React, { Component } from 'react';
import Infocard from './card.js'
import { Button, Card, Elevation } from "@blueprintjs/core";
import { STATIONS } from './fundingdata.js';

class Results extends React.Component {
  render() {

   var visible_stations = []
   for (var i = 0; i < this.state.STATIONS.length; i++) {
    if (this.state.STATIONS[i].organisation){
     visible_stations.push(<Infocard stationName={this.state.STATIONS[i].organisation} 
                                    key={i}/>);
                                        }
                                                        }
   

    return (
 
{visible_stations}
    );
  }
}

export default Results;
