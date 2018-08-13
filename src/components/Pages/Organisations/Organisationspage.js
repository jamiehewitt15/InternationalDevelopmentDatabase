import React, { Component } from 'react';


import Infocard from './infocard.js';
import Searcharea from './search/searcharea.js';


class Opportunities extends Component {
  render() {
    return (
      <div >
		<Searcharea />
		<div style={{margin: 100}}>

			<Infocard />

		</div>
	</div>
    );
  }
}

export default Opportunities;
