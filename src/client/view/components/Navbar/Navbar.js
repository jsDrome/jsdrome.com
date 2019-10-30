import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

class Navbar extends React.Component {
  render() {
    const { classes, title = '', description = '', onNavbarMenuClick, onNavbarTitleClick } = this.props;

    return (
      <AppBar id="navbar" className={classes.appBar} elevation={2}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onNavbarMenuClick}
            className={classes.menuButton}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <img alt="logo" src="/img/logo-56.png" className={classes.logoIcon} />
          <div className={classes.flex} onClick={onNavbarTitleClick}>
            <Typography variant="h6" className={classes.title} noWrap>{title}</Typography>
            <Typography variant="caption" color="inherit" className={classes.description} noWrap>{description}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
