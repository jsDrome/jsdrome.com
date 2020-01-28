import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

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
            <Hidden xsDown>
              <Typography variant="caption" color="inherit" className={classes.description} noWrap>{description}</Typography>
            </Hidden>
          </div>
          {!this.state.isUserLoggedIn && <Button
            color="secondary"
            href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78xv8akga6j22q&redirect_uri=https://jsdrome.com/login&scope=r_liteprofile%20r_emailaddress%20w_member_social">Login / Register</Button>}
          {this.state.isUserLoggedIn && <Button
            color="secondary"
            href="/logout">Logout</Button>}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
