/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import PayButton from '../PayButton/PayButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import GitHubButton from 'react-github-btn';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classnames(classes.box, classes.fixed)}>

      <div className={classes.pagePlugins}>
        <script type="IN/FollowCompany"
          data-id="34636884"
          data-counter="left"></script>
        <div style={{ zoom: '110%' }}>
          <GitHubButton
            href="https://github.com/jsdrome/jsdrome-site"
            data-color-scheme="no-preference: light; light: light; dark: light;"
            data-size="small"
            data-show-count="true"
            aria-label="Follow @jsdrome on GitHub">Star jsDrome</GitHubButton>
        </div>
      </div>

      <iframe className={classes.fbPagePlugin} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjsdrome%2F&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=277326689897549" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>

      <div className={classes.payButton}>
        <PayButton />
      </div>

      <SocialLinks />

      <Typography variant="body2" className={classes.text}>Sponsors</Typography>

      <Avatar className={classes.avatar} alt="Satheesh Kumar" src="https://avatars1.githubusercontent.com/u/8121176?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Gauraang Mukhopadhyay" src="https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg" />
      <Avatar className={classes.avatar} alt="Anand Tagore" src="https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg" />
      <Avatar className={classes.avatar} alt="Poornima Panicker" src="https://s3.amazonaws.com/uifaces/faces/twitter/divya/128.jpg" />
      <Avatar className={classes.avatar} alt="Purnima Mishra" src="https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg" />

      <Typography variant="body2" className={classes.text}>Mentors</Typography>

      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars0.githubusercontent.com/u/8502281?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Pooja Singh" src="https://avatars2.githubusercontent.com/u/55156772?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Priya Porwal" src="https://avatars1.githubusercontent.com/u/17856723?s=460&v=4" />

      <Typography variant="body2" className={classes.text}>Contributors</Typography>

      <Avatar className={classes.avatar} alt="Raamprasadh Natarajan" src="https://avatars0.githubusercontent.com/u/19321540?s=60&v=4" />
      <Avatar className={classes.avatar} alt="Shreya Reddy" src="https://avatars2.githubusercontent.com/u/58949356?s=460&v=4" />
      <CopyRight />

    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);
