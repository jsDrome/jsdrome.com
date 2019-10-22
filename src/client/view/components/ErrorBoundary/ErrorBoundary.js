import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) return <Typography style={{ textAlign: 'center' }} variant="h6">Oops! Something went wrong.</Typography>;
    return this.props.children;
  }
}
