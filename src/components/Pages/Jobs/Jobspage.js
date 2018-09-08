import React, { Component } from 'react';


import SortTable from './table.js';
import Searcharea from './search/searcharea.js';


class Jobs extends Component {
  render() {
    return (
      <div >
		<Searcharea />
		<div style={{margin: 100}}>

			<SortTable />

		</div>
	</div>
    );
  }
}

export default Jobs;
