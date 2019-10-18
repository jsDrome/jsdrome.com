import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class PaperSheet extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <main className={classes.content}>
        <Paper className={classes.root} elevation={0}>
          {children}
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);
