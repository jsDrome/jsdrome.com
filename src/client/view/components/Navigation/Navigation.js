import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import PrevIcon from '@material-ui/icons/ArrowLeft';
// import NextIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import styles from './styles';

const HomeIcon = props => <SvgIcon {...props}>
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</SvgIcon>;

class Navigation extends React.Component {
  render() {
    const { links: { prevLink, prevTitle, nextLink, nextTitle } } = this.props;

    return <Stepper activeStep={1}>
      {<Step>
        <StepLabel icon={null}>
          {prevLink ? <Button color="primary" href={prevLink}>{prevTitle}</Button> : <HomeIcon />}
        </StepLabel>
      </Step>}
      {<Step>
        <StepLabel icon={null}>
          {nextLink ? <Button color="primary" href={nextLink}>{nextTitle}</Button> : <HomeIcon />}
        </StepLabel>
      </Step>}
    </Stepper>;
  }
}

export default withStyles(styles, { withTheme: true })(Navigation);
