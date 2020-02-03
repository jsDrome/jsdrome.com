const width = 250;

export default theme => ({
  root: {
    marginBottom: 100,
    borderTop: `solid 1px #e9ebee`,
    [theme.breakpoints.up('md')]: {
      marginTop: -15,
    },
  },
  nestedListItem: {
    paddingLeft: 30,
    padding: 3,
  },
  activeListItem: {
    padding: 3,
    paddingLeft: 25,
    borderLeft: `solid 5px`,
    background: theme.background.primary,
  },
  payButton: {
    // padding: 10,
  },
  fbPagePlugin: {
    width,
    height: 70,
    margin: 'auto',
    marginTop: 20,
    display: 'block',
  },
  text: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    margin: 10,
  },
  people: {
    marginTop: 20,
    marginBottom: 20,
  },
  contributors: {
    width,
    // padding: 20,
    margin: 'auto',
    display: 'block',
  },
  avatar: {
    display: 'inline-block',
    margin: 0,
  },
  pagePlugins: {
    // height: 50,/
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
});