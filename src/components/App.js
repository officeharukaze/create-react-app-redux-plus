import React from 'react';
import UploadFile from './uploadFile';
import '../styles/App.css';

const logo = require('../images/logo.svg');

const style = {
  main: {
    width: '100vw',
    flexDirection: 'column',
  },
  header: {
    width: '100vw',
  },
  wrapper: {
    width: '100vw',
    height: 'calc(100vh - 190px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropzone: {
    width: 200,
    height: 200,
    border: '2px dotted #000',
  },
  activeStyle: {},
  rejectStyle: {},
};

export const App = () =>
  <div style={style.main} className="App">
    <div style={style.header} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div style={style.wrapper}>
      <UploadFile />
    </div>
  </div>;

export default App;
