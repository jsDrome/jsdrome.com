import React from 'react';
import Paper from '@material-ui/core/Paper';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class PaperSheet extends React.Component {
  render() {
    const { classes, children, className } = this.props;

    return (
      <main className={cn(classes.content, className)}>
        <Paper className={classes.root} elevation={2}>
          {children}
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);
