import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { Typography } from '@material-ui/core';
import moment from 'moment';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root} >
      <Typography variant="caption">Sreeram Padmanabhan &copy; {moment().format('YYYY')}  </Typography>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(Footer);