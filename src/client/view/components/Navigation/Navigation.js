import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PrevIcon from '@material-ui/icons/skipPrevious';
import NextIcon from '@material-ui/icons/skipNext';
import Link from '@material-ui/core/Link';

import styles from './styles';

class Navigation extends React.Component {
  render() {
    const { links: { prevLink, prevTitle, nextLink, nextTitle } } = this.props;

    return <Stepper activeStep={1} alternativeLabel style={{ padding: 10, marginTop: 30 }}>
      {prevLink && <Step>
        <StepLabel icon={<PrevIcon />}>
          <Link href={prevLink}>{prevTitle}</Link>
        </StepLabel>
      </Step>}
      {nextLink && <Step>
        <StepLabel icon={<NextIcon />}>
          <Link href={nextLink}>{nextTitle}</Link>
        </StepLabel>
      </Step>}
    </Stepper>;
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
