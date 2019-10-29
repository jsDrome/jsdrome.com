import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NestedList from '../NestedList/NestedList';

const list = require('../../../list');
import styles from './styles';

class SidebarContent extends Component {
  state = {
    selectedList: -1,
    selectedListItem: -1,
  }
  onSelect(i, j) {
    this.setState({
      selectedList: i,
      selectedListItem: j,
    })
  }
  isSelected(i, j, title) {
    const { selectedList, selectedListItem } = this.state;
    return (i === selectedList && j === selectedListItem) || this.props.selectedListItem === title;
  }
  render() {
    const { classes, selectedList, onLinkClick } = this.props;

    return <div className={classes.root}>
      {/* eslint-disable-next-line no-magic-numbers */}
      {list.slice(1).map((item, i) => item.links.length ? <NestedList key={i} title={`${item.title} ${process.env.NODE_ENV === 'development' ? `(${item.links.length})` : '' }`} className={classes.nestedList} open={list.length === 2 || item.title === selectedList}>
        {item.links.map((link, j) => <ListItem key={j} component={'a'} onClick={() => this.onSelect(i, j, link.title)} className={this.isSelected(i, j, link.title) ? classes.activeListItem : classes.nestedListItem} href={link.route}>
          <ListItemText secondary={link.title} className={classes.nestedListItemText} onClick={onLinkClick} />
        </ListItem>)}
      </NestedList> : null)}
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(SidebarContent);