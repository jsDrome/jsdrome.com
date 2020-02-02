export default theme => ({
  appBar: {
    // eslint-disable-next-line no-magic-numbers
    zIndex: theme.zIndex.drawer + 1,
    background: theme.background.secondary,
  },
  menuButton: {
    cursor: 'pointer',
    padding: 8,
    marginRight: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  menuIcon: {
    height: '1.2em',
    width: '1.2em',
  },
  toolBar: {
    minHeight: 50,
    marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      marginLeft: -20,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: -12,
    },
  },
  flex: {
    cursor: 'pointer',
    flexGrow: 1,
  },
  title: {
    display: 'inline',
  },
  description: {
    marginLeft: 5,
    display: 'inline',
    fontStyle: 'italic',
  },
  logoIcon: {
    cursor: 'pointer',
    height: 25,
    width: 25,
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
});
