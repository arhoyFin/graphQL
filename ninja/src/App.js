import React, { Component } from 'react';

import Cafe from './components/Cafe/Cafe';
import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    console.log('app started');
    return (
      <div className="App">
          <Layout>
             <Cafe/>
          </Layout>
       
      </div>
    );
  }
}

export default App;
