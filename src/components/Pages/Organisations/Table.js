import React, { Component } from 'react';
import { FUNDINGDATA } from './data/funding-data.js';
import {BootstrapTable, TableHeaderColumn, caretRender} from 'react-bootstrap-table';
import { Icon, Button, MenuItem  } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";



let order = 'desc';


class SortTable extends React.Component {

renderCaret = (direction, fieldName) => {
  if (direction === 'asc') {
    return (
       <Icon icon="chevron-up" />
    );
  }
  if (direction === 'desc') {
    return (
       <Icon icon="chevron-down" /> 
    );
  }
  return (
     <span><Icon icon="chevron-up" /><Icon icon="chevron-down" /></span>
  );
}

  render() {
    return (
      <div>
        
        <BootstrapTable ref='table' data={ FUNDINGDATA }  headerStyle={ { background: '#f9fafb' } } tableStyle={ { background: '#ffffff' } }>
            <TableHeaderColumn dataField='title' isKey={ true } dataSort={ true } caretRender={ this.renderCaret }>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='organisation' dataSort={ true } caretRender={ this.renderCaret }>Organisation </TableHeaderColumn>
            <TableHeaderColumn dataField='type' dataSort={ true } caretRender={ this.renderCaret } >Type</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default SortTable;