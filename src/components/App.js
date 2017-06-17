import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/App.css';

const logo = require('../images/logo.svg');

export const PureApp = ({count = 0, dispatch}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.jsx</code> and save to reload.
    </p>
    <button onClick={ e => {dispatch({ type: "INC" });}}>INC</button>
    { count }
    <button onClick={ e => {dispatch({ type: "DEC" });}}>DEC</button>
  </div>
);

PureApp.propTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.main.count,
});

export default connect(mapStateToProps)(PureApp);
