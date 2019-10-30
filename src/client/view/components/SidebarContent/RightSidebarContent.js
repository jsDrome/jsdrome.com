import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PayButton from '../PayButton/PayButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.fixed}>
      <div className={classes.payButton}><PayButton /></div>
      <SocialLinks />
      <CopyRight />
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);