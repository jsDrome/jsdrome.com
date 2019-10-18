import React, { Component } from 'react';
import Markdown from '../Markdown/Markdown';

class Post extends Component {
  render() {
    const { children } = this.props;
    return <Markdown className="post">
      {children}
    </Markdown>;
  }
}

export default Post;