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
    padding: 8,
  },
  activeListItem: {
    padding: 8,
    paddingLeft: 25,
    borderLeft: `solid 5px ${theme.background.secondary}`,
    background: theme.background.primary,
  },
});