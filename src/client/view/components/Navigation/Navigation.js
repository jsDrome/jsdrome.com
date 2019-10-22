import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PrevIcon from '@material-ui/icons/ArrowLeft';
import NextIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';

import styles from './styles';

class Navigation extends React.Component {
  render() {
    const { links: { prevLink, prevTitle, nextLink, nextTitle } } = this.props;

    return <Stepper activeStep={1} alternativeLabel style={{ padding: 0, marginTop: 30 }}>
      {prevLink && <Step>
        <StepLabel icon={<PrevIcon />}>
          <Button color="primary" href={prevLink}>{prevTitle}</Button>
        </StepLabel>
      </Step>}
      {nextLink && <Step>
        <StepLabel icon={<NextIcon />}>
          <Button color="primary" href={nextLink}>{nextTitle}</Button>
        </StepLabel>
      </Step>}
    </Stepper>;
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
