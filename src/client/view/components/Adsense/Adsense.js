import React, { Component } from 'react';

export default class AdComponent extends Component {
  state = {
    isUserLoggedIn: false,
  };

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});

    this.setState({
      isUserLoggedIn: !!document.cookie.match(/^(.*;)?\s*__session\s*=\s*[^;]+(.*)?$/),
    });
  }

  render() {
    const { className = "adsbygoogle", adFormat = "", style = null, adClient = "", adSlot = "", layoutKey = "" } = this.props;
    const { isUserLoggedIn } = this.state;

    return isUserLoggedIn && <ins className={className}
      data-ad-format={adFormat}
      style={{ display: 'block', ...style }}
      data-ad-layout-key={layoutKey}
      data-ad-client={adClient}
      data-ad-slot={adSlot} />;
  }
}