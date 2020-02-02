import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class RightSidebar extends React.Component {
  render() {
    const { classes, children } = this.props;

    return <div className={classnames(classes.box, classes.fixed)}>
      {children}
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebar);
