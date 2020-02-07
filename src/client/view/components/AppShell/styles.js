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
      // marginTop: 0,
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
  homeIcon: {
    height: 24,
    width: 24,
    color: '#fff',
    float: 'right',
    padding: 10,
    marginTop: -40,
    marginRight: -15,
    borderRadius: 3,
    backgroundColor: '#999',
    // background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    // boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
    // background: 'linear-gradient(60deg, #ef5350, #e53935)',
    // boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      marginTop: -25,
      marginRight: -5,
    },
  },
});
