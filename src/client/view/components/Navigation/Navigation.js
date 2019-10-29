import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import PrevIcon from '@material-ui/icons/ArrowLeft';
// import NextIcon from '@material-ui/icons/ArrowRight';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';

import styles from './styles';

const HomeIcon = props => <SvgIcon {...props}>
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</SvgIcon>;

class Navigation extends React.Component {
  render() {
    const { classes, links: { prevLink, prevTitle, nextLink, nextTitle } } = this.props;

    return <Stepper activeStep={1}>
      {<Step>
        <StepLabel icon={null}>
          {prevLink ? <Link
            className={classes.link}
            color={"primary"}
            component="button"
            variant="body2"
            onClick={() => window.location=prevLink}>{prevTitle}</Link> : <HomeIcon />}
        </StepLabel>
      </Step>}
      {<Step>
        <StepLabel icon={null}>
          {nextLink ? <Link
            className={classes.link}
            color={"primary"}
            component="button"
            variant="body2"
            onClick={() => window.location=nextLink}>{nextTitle}</Link> : <HomeIcon />}
        </StepLabel>
      </Step>}
    </Stepper>;
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
