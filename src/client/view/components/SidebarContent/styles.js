export default theme => ({
  root: {
    marginBottom: 100,
    borderTop: `solid 1px #e9ebee`,
    [theme.breakpoints.up('md')]: {
      marginTop: -15,
    },
  },
  nestedListItem: {
    paddingLeft: 30,
    padding: 3,
  },
  activeListItem: {
    padding: 3,
    paddingLeft: 25,
    borderLeft: `solid 5px`,
    background: theme.background.primary,
  },
  fixed: {
    position: 'fixed',
    top: 65,
  },
  payButton: {
    width: 250,
    marginTop: 15,
    marginBottom: 15,
  },
});