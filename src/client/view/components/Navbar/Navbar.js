import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import { getParameterByName } from '../../../utils/helpers';
import styles from './styles';

class Navbar extends React.Component {
  state = {
    isUserLoggedIn: false,
  }
  componentDidMount() {
    this.setState({
      isUserLoggedIn: !!document.cookie.match(/^(.*;)?\s*__session\s*=\s*[^;]+(.*)?$/),
    });
  }
  render() {
    const { classes, title = '', description = '', onNavbarMenuClick, onNavbarTitleClick } = this.props;

    return (
      <AppBar id="navbar" className={classes.appBar} elevation={4}>
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
            <Hidden xsDown>
              <Typography variant="caption" color="inherit" className={classes.description} noWrap>{description}</Typography>
            </Hidden>
          </div>
          {!this.state.isUserLoggedIn && <Button
            color="secondary"
            href={`/login?originalUrl=${getParameterByName('originalUrl') || '/'}`}>Login / Register</Button>}
          {this.state.isUserLoggedIn && <Button
            color="secondary"
            href="/logout">Logout</Button>}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
