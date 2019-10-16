export default theme => ({
  root: {
    marginBottom: 100,
  },
  nestedList: {
  },
  nestedListItem: {
    paddingLeft: 40,
    padding: 12,
  },
  nestedListItemText: {
  },
  activeListItem: {
    padding: 12,
    paddingLeft: 35,
    borderLeft: 'solid 5px #3f51b5',
    background: theme.background.primary,
  },
  fixed: {
    position: 'fixed',
    top: 50,
  },
});