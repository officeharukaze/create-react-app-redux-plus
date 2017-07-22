import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadFile from './uploadFile';
import '../styles/App.css';

const logo = require('../images/logo.svg');

const style = {
  main: {
    width: '100vw',
    margin: 0,
    padding: 0,
  },
  header: {
    width: '100vw',
    margin: 0,
    padding: '20px 0',
  },
  wrapper: {
    width: '100vw',
    height: 'calc(100vh - 190px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  uploadedFile: {
    width: 200,
    height: 200,
    border: '1px solid #000',
    marginTop: 10,
  },
};

export const PureApp = ({ url }) =>
  <div style={style.main} className="App">
    <div style={style.header} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div style={style.wrapper}>
      <UploadFile />
      <img style={style.uploadedFile} src={url} alt="uploadedFile" />
    </div>
  </div>;

  PureApp.propTypes = {
    url: PropTypes.string,
    dispatch: PropTypes.func,
  };

  const mapStateToProps = state => ({
    url: state.main.url,
  });

  export default connect(mapStateToProps)(PureApp);
