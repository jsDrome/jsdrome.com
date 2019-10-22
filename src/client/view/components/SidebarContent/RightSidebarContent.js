import React, { Component } from 'react';

class RightSidebarContent extends Component {
  render() {
    return <React.Fragment>
      <a href="https://stackoverflow.com/users/story/5228328?view=Cv"><img src="https://stackexchange.com/users/flair/6791285.png?theme=clean" width="250" alt="profile for Sreeram on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Sreeram on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a> <br />
      <iframe title="facebook-page" src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsreeramslife%2F&tabs=timeline&width=250&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=297023651089707"} style={{ border: 'none', overflow: 'hidden', width: 250, height: 130 }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
      <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="sreeramofficial"><a className="LI-simple-link" href="https://in.linkedin.com/in/sreeramofficial?trk=profile-badge"></a></div>
      <a href="https://play.google.com/store/apps/details?id=com.londonz.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          style={{ display: 'block', width: 290, marginLeft: -20, marginTop: -15 }}
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" />
      </a>
    </React.Fragment>;
  }
}

export default RightSidebarContent;