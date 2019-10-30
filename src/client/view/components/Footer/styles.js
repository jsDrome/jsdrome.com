export default theme => ({
  footer: {
    width: '100%',
    position: 'fixed',
    left:0,
    bottom: 0,
    zIndex: 2001,
    borderTop: 'solid 1px ' + theme.background.primary,
    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
    },
    height: 100,
  },
})
