import React, { Component } from 'react';
import { connect } from 'react-redux';

import PayButton from '../../components/PayButton/PayButton';

class Page extends Component {
  render() {
    return <PayButton autoSubmit/>
  }
}

const mapStateToProps = state => state;
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);