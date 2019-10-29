import { createMuiTheme } from '@material-ui/core/styles';
import secondary from '@material-ui/core/colors/pink';
import tertiary from '@material-ui/core/colors/indigo';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary,
    tertiary: tertiary['800'],
  },
  background: {
    primary: '#eceff1',
    secondary,
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
