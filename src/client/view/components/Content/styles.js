/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    padding: 15,
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: 20,
      paddingTop: 0,
    },
    marginBottom: 60,
  },
});