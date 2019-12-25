/* eslint-disable no-magic-numbers */
/* global FB */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class RightSidebarContent extends Component {
  componentDidMount() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    if (!window.fbAsyncInit) {
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v5.0',
        });
      };
    }
  }
  render() {
    const { pageId } = this.props;

    return <div>
      <div id="fb-root"></div>
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id={pageId}>
      </div>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);