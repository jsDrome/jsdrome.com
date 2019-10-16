import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class RightSidebarContent extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.fixed}>
      <iframe title="facebook-page" src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flondonios%2F&tabs=timeline&width=250&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=297023651089707"} style={{ border: 'none', overflow: 'hidden', width: 250, height: 380 }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
      <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="sreerampr"><a className="LI-simple-link" href="https://in.linkedin.com/in/sreerampr?trk=profile-badge"></a></div>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(RightSidebarContent);