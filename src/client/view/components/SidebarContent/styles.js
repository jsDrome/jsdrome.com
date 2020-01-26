export default theme => ({
  root: {
    marginBottom: 100,
    borderTop: `solid 1px #e9ebee`,
    [theme.breakpoints.up('md')]: {
      marginTop: -15,
    },
  },
  box: {
    width: 250,
    textAlign: 'center',
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
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  },
  text: { display: 'block', width: '100%', textAlign: 'center', margin: 10 },
  avatar: {
    display: 'inline-block',
    margin: 0,
  },
});