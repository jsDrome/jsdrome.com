export default theme => ({
  app: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: theme.background.primary,
    color: '#333',
  },
  contentWrapper: {
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: 275,
    },
  },
  content: {
    maxWidth: 600,
  },
  sidebar: {
  },
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 2002,
  },
  footer: {
    fontStyle: 'italic',
    fontWeight: 300,
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
    padding: 10,
    background: '#4267b2',
    color: '#fff',
    bottom: 0,
    zIndex: 2001,
    // borderTop: 'solid 2px ' + theme.background.primary,
    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
    },
  },
  toolbar: {
    height: 70,
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
  },
});
