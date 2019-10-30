import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './routes';
import ErrorBoundary from './view/components/ErrorBoundary/ErrorBoundary';
import AppShell from './view/components/AppShell/AppShell';

import './utils/webShare';

import theme from '../theme';
import store from './data/store';
import './assets';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <AppShell>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </AppShell>
      </ReduxProvider>
    </MuiThemeProvider>
  );
}

render(<Main />, document.querySelector('#root'));

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  /* eslint-disable no-console */
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => { console.log('SW registered: ', registration); })
      .catch(registrationError => { console.log('SW registration failed: ', registrationError); });
  });
}

if (module.hot) module.hot.accept();