import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Post from '../../components/Post/Post';

import { setMessage } from '../../../data/app/appActions';

class Page extends Component {
  componentDidMount() {
    this.props.setMessage({
      message: 'Please login access this page.',
      type: 'error',
    });
  }
  handleErrorClose() {
    const { setMessage } = this.props;
    setMessage(null);
  }
  render() {
    const { app: { message } } = this.props;
    return <div>
      {message && message.message && <ErrorMessage variant={message.type} message={message.message} duration={20000} handleErrorClose={this.handleErrorClose.bind(this)} />}
      <Post>Error: Unauthorized. Please login to view this page.</Post>
    </div>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setMessage: data => dispatch(setMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);