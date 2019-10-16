import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class PaperSheet extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(PaperSheet);
