/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import PayButton from '../PayButton/PayButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classnames(classes.box, classes.fixed)}>

      <div className={classes.pagePlugins}>
        <script type="IN/FollowCompany"
          data-id="34636884"
          data-counter="left"></script>
        <div style={{ zoom: '110%' }}>
          <a className="github-button" href="https://github.com/jsdrome/jsdrome-site" data-icon="octicon-star" aria-label="Star jsdrome/jsdrome-site on GitHub">Star jsDrome</a>
        </div>
      </div>

      <iframe className={classes.fbPagePlugin} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjsdrome%2F&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=277326689897549" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>

      <div className={classes.payButton}>
        <PayButton text={'Sponsor'} />
      </div>

      <SocialLinks />
      <CopyRight />

    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);
