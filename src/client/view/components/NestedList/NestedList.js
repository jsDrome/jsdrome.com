import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import styles from './styles';

class NestedList extends React.Component {
  state = {
    open: this.props.open || false,
  };

  componentDidMount() {
    const { open } = this.props;
    if (open) this.setState({ open: true });
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { classes, title, children } = this.props;
    return (
      <List component="div" className={classes.list}>
        <ListItem button onClick={() => this.handleClick()}>
          <ListItemText primary={title} />
          {this.state.open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.nestedList} >
            {children}
          </List>
        </Collapse>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles)(NestedList);
