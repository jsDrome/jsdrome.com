export default theme => ({
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
});
