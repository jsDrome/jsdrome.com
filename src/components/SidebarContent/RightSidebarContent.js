import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.fixed}>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);