import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import styles from './styles';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation className={classes.footer}>
        {this.props.children}
      </BottomNavigation>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);