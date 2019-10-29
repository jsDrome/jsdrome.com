import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { Typography, Link } from '@material-ui/core';
import moment from 'moment';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root} >
      <Typography variant="caption">&copy; <Link color={"secondary"} href="https://github.com/jsDrome/jsdrome-2020">{"<jsDrome\\>"}</Link> {moment().format('YYYY')} | All rights reserved </Typography>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(Footer);