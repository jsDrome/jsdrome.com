/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      padding: 30,
    },
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      padding: 20,
      paddingTop: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
  },
});
