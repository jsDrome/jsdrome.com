import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import PayButton from '../PayButton/PayButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classnames(classes.box, classes.fixed)}>
      <Typography variant="body2" className={classes.text}>Our growing team</Typography>
      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars0.githubusercontent.com/u/8502281?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Pooja Singh" src="https://avatars2.githubusercontent.com/u/55156772?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Priya Porwal" src="https://avatars1.githubusercontent.com/u/17856723?s=460&v=4" />

      <Typography variant="body2" className={classes.text}>Contributors</Typography>
      <Avatar className={classes.avatar} alt="Raamprasadh Natarajan" src="https://avatars0.githubusercontent.com/u/19321540?s=60&v=4" />
      <Avatar className={classes.avatar} alt="Shreya Reddy" src="https://avatars2.githubusercontent.com/u/58949356?s=460&v=4" />

      {/* <Typography variant="body2" className={classes.text}>Sponsors</Typography>
      <Avatar className={classes.avatar} alt="Satheesh Kumar" src="https://avatars1.githubusercontent.com/u/8121176?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Gauraang Mukhopadhyay" src="https://s3.amazonaws.com/uifaces/faces/twitter/itskawsar/128.jpg" />
      <Avatar className={classes.avatar} alt="Anand Tagore" src="https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg" />
      <Avatar className={classes.avatar} alt="Poornima Panicker" src="https://s3.amazonaws.com/uifaces/faces/twitter/divya/128.jpg" />
      <Avatar className={classes.avatar} alt="Purnima Mishra" src="https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg" /> */}

      {/* <Typography variant="body2" className={classes.text}>Contributors</Typography>
      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars0.githubusercontent.com/u/8502281?s=460&v=4" />
      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars3.githubusercontent.com/u/8121176?s=60&v=4" />
      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars3.githubusercontent.com/u/29339469?s=60&v=4" />
      <Avatar className={classes.avatar} alt="Sreeram Padmanabhan" src="https://avatars0.githubusercontent.com/u/19321540?s=60&v=4" /> */}
      {/* <iframe title="facebook-page" src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsreeramslife%2F&tabs=timeline&width=250&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=297023651089707"} style={{ border: 'none', overflow: 'hidden', width: 250, height: 130 }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe> */}
      {/* <Typography variant="caption" className={classes.text}>Become a financial contributor and help us sustain our community.</Typography> */}
      <div className={classes.payButton}><PayButton /></div>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjsdrome%2F&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=277326689897549" width="300" style={{ border:'none', overflow:'hidden' }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
      <SocialLinks />
      <CopyRight />
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);
