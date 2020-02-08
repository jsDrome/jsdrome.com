/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      padding: 30,
    },
    wordBreak: 'break-word',
    maxWidth: 800,
    margin: 'auto',
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
    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
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
