import { createMuiTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: indigo['500'],
    },
  },
  background: {
    primary: '#eceff1',
  },
  typography: {
    fontSize: 13,
    fontFamily: "Ubuntu, sans-serif, Verdana, 'Trebuchet MS', 'Tahoma'",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
  },
});
