import React, { Component } from 'react';

import Topnav from './components/topnav.js';
import Titlecard from './components/titlearea.js';
import Loadmorebutton from './components/loadmorebutton.js';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#F2F3F4', paddingBottom: 40}}>
<Topnav />
<Titlecard />

</div>
    );
  }
}

export default App;
