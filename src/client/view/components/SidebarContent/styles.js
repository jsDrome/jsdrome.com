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
  people: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
    },
    textAlign: 'left',
  },
  fbPagePlugin: {
    width,
    height: 70,
    margin: 'auto',
    marginBottom: 5,
    display: 'block',
  },
  pagePlugins: {
    display: 'flex',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
  contributorsSection: {
    margin: '10px 0 20px',
    textAlign: 'center',
  },
  contributors: {
    [theme.breakpoints.up('md')]: {
      width,
    },
    margin: 'auto',
    display: 'block',
    // padding: '0 20px',
  },
  text: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
  },
  avatar: {
    display: 'inline-block',
    margin: 0,
  },
  socialLinks: {
    marginBottom: 20,
  },
  payButton: {
    marginBottom: 20,
  },
  googlePlayAd: {
    display: 'block',
    margin: 'auto',
    marginBottom: -10,
    // eslint-disable-next-line no-magic-numbers
    width: width + 40,
  },
  googlePlayAdImg: {
    // eslint-disable-next-line no-magic-numbers
    width: width + 40,
    marginTop: -20,
    textAlign: 'center',
  },
  adsense: {
    marginBottom: 20,
  },
});