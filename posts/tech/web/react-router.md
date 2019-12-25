# Routing using React Router

&nbsp;

## Summary

In the old age, websites used to be multipaged. You land on a page, click on a link and it takes you to a different page each time requesting for resources from the server. Many of the requests were repetitive. Though only the content changed, the entire page along with the individual assets had to be requested and rendered again. This was redundant.

In the world of Single Page Applications, there is only one page rendering the entire App. But with React router, you could achieve the effect of a Multi Page Application, but at the same time, requesting and rendering only the content every time the route changes.

## Install

`npm i --save react-router-dom`

## Configure

Move the file `./src/index.js` to `./src/components/App/App.js`

Create 2 files called `./src/routes.js` and `./src/index.js` with the following content.

## Code

`./src/routes.js`

    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import App from './components/App/App';

    const Routes = () => <Router>
        <Switch>
            <App />
        </Switch>
    </Router>;

    export default Routes;

`./src/index.js`

    import React from 'react';
    import { render } from 'react-dom';
    import Routes from './routes';

    render(<Routes />, document.getElementById('root'));