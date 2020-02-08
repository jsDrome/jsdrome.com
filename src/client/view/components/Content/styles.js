/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      padding: 20,
    },
    wordBreak: 'break-word',
    maxWidth: 800,
    margin: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
    },
    // paddingTop: 0,
  },
});
