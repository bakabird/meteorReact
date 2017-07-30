import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {createContainer} from 'meteor/react-meteor-data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div></div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};