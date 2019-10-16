import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class SidebarContent extends Component {
  state = {
    selectedList: -1,
    selectedListItem: -1,
  }
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>
    </div>;
  }
}

export default withStyles(styles, { withTheme : true })(SidebarContent);