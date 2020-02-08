/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import PayButton from '../PayButton/PayButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Content from '../Content/Content';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <Content className={classes.people}>
      <div className={classes.fbPagePlugin}>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjsdrome%2F&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=277326689897549" width="250" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
      </div>

      <div className={classes.pagePlugins}>
        <script type="IN/FollowCompany"
          data-id="34636884"
          data-counter="left"></script>
        <div style={{ zoom: '112%' }}>
          <a className="github-button"
            href="https://github.com/jsdrome/jsdrome-site"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star jsdrome/jsdrome-site on GitHub">Star jsDrome</a>
        </div>
      </div>

      <div className={classes.contributorsSection}>
        <Typography variant="body2" className={classes.text}>The Team</Typography>
        <div className={classes.contributors}>
          <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars0.githubusercontent.com/u/8502281?s=460&v=4" />
          <Avatar className={classes.avatar} alt="Pooja Singh" src="https://avatars2.githubusercontent.com/u/55156772?s=460&v=4" />
          <Avatar className={classes.avatar} alt="Priya Porwal" src="https://avatars1.githubusercontent.com/u/17856723?s=460&v=4" />
          <Avatar className={classes.avatar} alt="Preethy Krishnamoorthy" src="https://avatars1.githubusercontent.com/u/29339469?s=460&v=4" />
          {/* </div> */}

          {/* <Typography variant="body2" className={classes.text}>Contributors</Typography>
        <div className={classes.contributors}> */}
          <Avatar className={classes.avatar} alt="Priyam Patel" src="https://avatars2.githubusercontent.com/u/43856835?s=96&v=4" />
          <Avatar className={classes.avatar} alt="Vignesh AZ" src="https://avatars1.githubusercontent.com/u/59390973?s=96&v=4" />
          <Avatar className={classes.avatar} alt="Balaji Vaishnav" src="https://avatars0.githubusercontent.com/u/10260400?s=96&v=4" />
          <Avatar className={classes.avatar} alt="Bhuvanash" src="https://avatars0.githubusercontent.com/u/59439338?s=96&v=4" />
          <Avatar className={classes.avatar} alt="Vinoth" src="https://avatars0.githubusercontent.com/u/59483735?s=96&v=4" />
          {/* </div> */}

          {/* <Typography variant="body2" className={classes.text}>Outside contributors</Typography>
        <div className={classes.contributors}> */}
          <Avatar className={classes.avatar} alt="Raamprasadh Natarajan" src="https://avatars0.githubusercontent.com/u/19321540?s=60&v=4" />
          <Avatar className={classes.avatar} alt="Shreya Reddy" src="https://avatars2.githubusercontent.com/u/58949356?s=460&v=4" />
          {/* </div> */}

          {/* <Typography variant="body2" className={classes.text}>Sponsors</Typography>
        <div className={classes.contributors}> */}
          {/* <Avatar variant="square" className={classes.avatar} alt="Satheesh Kumar" src="https://avatars1.githubusercontent.com/u/8121176?s=460&v=4" />
          <Avatar variant="square" className={classes.avatar} alt="Gauraang Mukhopadhyay" src="https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg" />
          <Avatar variant="square" className={classes.avatar} alt="Anand Tagore" src="https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg" />
          <Avatar variant="square" className={classes.avatar} alt="Poornima Panicker" src="https://s3.amazonaws.com/uifaces/faces/twitter/divya/128.jpg" />
          <Avatar variant="square" className={classes.avatar} alt="Purnima Mishra" src="https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg" /> */}
        </div>
      </div>

      <Typography variant="body2" className={classes.text}>Take the Z-Axis Challenge</Typography>
      <a href="https://play.google.com/store/apps/details?id=com.londonz.app">
        <img className={classes.googlePlayAd} src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" />
      </a>

      <div className={classes.socialLinks}>
        <SocialLinks />
      </div>

      <div className={classes.payButton}>
        <PayButton text={'Sponsor'} />
      </div>
      <CopyRight />
    </Content>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);
