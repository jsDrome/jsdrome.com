import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Post from '../../components/Post/Post';
import FullpageLoader from '../../components/FullpageLoader/FullpageLoader';
import MetaTags from '../../components/MetaTags/MetaTags';
import Navigation from '../../components/Navigation/Navigation';

import { setMessage, checkPayment, getContent } from '../../../data/app/appActions';
import { getMetaTags, getLinks } from '../../../utils/custom';

class Page extends Component {
  state = {
    metaTags: this.getMetaTags(),
  }
  getMetaTags() {
    const { match: { params: { folder = 'home', subfolder = 'home', post = 'home' } } } = this.props;
    return getMetaTags(folder, subfolder, post);
  }
  componentDidMount() {
    const { checkPayment } = this.props;
    checkPayment();
    this.getContent();
  }
  componentDidUpdate(prevProps) {
    const { match: { params: { post } } } = this.props;
    const { match: { params: { post: prevPost } } } = prevProps;
    if (post !== prevPost) {
      this.setState({ drawerOpen: false });
      this.getContent();
    }
  }
  getContent() {
    const { match: { params: { folder, subfolder, post } }, getContent } = this.props;
    getContent(folder, subfolder, post);
  }
  handleErrorClose() {
    const { setMessage } = this.props;
    setMessage(null);
  }
  render() {
    const { app: { content, error, message }, match: { params: { folder = 'home', subfolder = 'home', post = 'home' } } } = this.props;
    const { metaTags } = this.state;

    return <div>
      <MetaTags {...metaTags} />
      {message && message.message && <ErrorMessage variant={message.type} message={message.message} duration={2000} handleErrorClose={this.handleErrorClose.bind(this)} />}
      {!error && !content[`${folder}/${subfolder}/${post}`] && <FullpageLoader />}
      {content[`${folder}/${subfolder}/${post}`] && <React.Fragment>
        <Post>{content[`${folder}/${subfolder}/${post}`]}</Post>
        <Navigation links={getLinks(folder, subfolder, post)} />
      </React.Fragment>}
    </div>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  setMessage: () => dispatch(setMessage()),
  checkPayment: () => dispatch(checkPayment()),
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);