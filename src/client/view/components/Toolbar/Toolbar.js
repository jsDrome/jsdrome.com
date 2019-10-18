import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const MyToolbar = ({ classes }) => <Toolbar className={classes.toolBar}></Toolbar>;

export default withStyles(styles, { withTheme: true })(MyToolbar);
