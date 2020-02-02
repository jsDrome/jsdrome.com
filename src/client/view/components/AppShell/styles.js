export default theme => ({
  app: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: theme.background.primary,
    color: '#333',
  },
  gridWrapper: {
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 275,
    },
  },
  content: {
    marginTop: 15,
    minWidth: 300,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      minWidth: '100%',
    },
    // margin: 'auto',
  },
  fab: {
    position: 'fixed',
    bottom: 100,
    right: 26,
    zIndex: 2002,
    background: theme.palette.tertiary,
    [theme.breakpoints.down('xs')]: {
      top: 'calc(50% - 28px)',
      right: -10,
      '&:hover': {
        right: 0,
      },
      '&:active': {
        right: 0,
      },
    },
  },
});
