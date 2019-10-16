/* eslint-disable no-magic-numbers */

export default theme => ({
  content: {
    [theme.breakpoints.up('md')]: {
      paddingTop: 20,
    },
  },
  toolbar: {
    minHeight: 48,
  },
});
