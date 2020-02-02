import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styles from './styles';
import { Toolbar } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const { TITLE } = require('../../../../variables');

class Sidebar extends React.Component {
  render() {
    const { classes, theme, children = null, drawerOpen, handleDrawerToggle } = this.props;
    return <nav className={classes.drawer}>
      {/*  MD Down */}
      <Hidden xsUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawer }}>
          <Toolbar className={classes.toolBar}>
            <img src="/img/logo-100.png" className={classes.logoIcon} />
            <Typography variant="h6" color="textSecondary" className={classes.flex} noWrap>{TITLE}</Typography>
          </Toolbar>
          {children}
        </Drawer>
      </Hidden>
      {/* MD up */}
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawer }}
          variant="persistent"
          open>
          <Toolbar className={classes.toolbar} />
          {children}
        </Drawer>
      </Hidden>
    </nav>;
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
