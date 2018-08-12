import React, { Component } from 'react';

import Topnav from './components/topnav.js';
import Results from './components/results.js';
import Infocard from './components/infocard.js';
import Searcharea from './components/searcharea.js';
import Titlecard from './components/titlearea.js';
import Loadmorebutton from './components/loadmorebutton.js';
import Searchapp from './components/search/Searchapp';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#F2F3F4', paddingBottom: 40}}>
<Topnav />
<Titlecard />
<Searcharea />
<div style={{margin: 100}}>
<Infocard />

</div>
</div>
    );
  }
}

export default App;
