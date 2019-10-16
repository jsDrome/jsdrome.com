import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  background: {
    primary: '#e9ebee',
  },
  typography: {
    fontSize: 13,
    fontFamily: "'Ubuntu', sans-serif, Verdana, 'Trebuchet MS', 'Tahoma'",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
  },
});
