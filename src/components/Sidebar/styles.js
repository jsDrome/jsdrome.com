/* eslint-disable no-unused-vars */
const drawerWidth = 275;

export default theme => ({
  toolbar: {
    minHeight: 50,
  },
  drawer: {
    width: drawerWidth,
    border: 'none',
  },
  toolBar: {
    minHeight: 50,
    borderBottom: 'solid 1px ' + theme.background.primary,
  },
  flex: {
    flexGrow: 1,
  },
  logoIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
