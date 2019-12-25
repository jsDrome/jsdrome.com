import React, { Component } from 'react';

export default class AdComponent extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { className = "adsbygoogle", adFormat = "", style = null, adClient = "", adSlot = "", layoutKey = "" } = this.props;
    return (
      <ins className={className}
        data-ad-format={adFormat}
        style={{ display: 'block', ...style }}
        data-ad-layout-key={layoutKey}
        data-ad-client={adClient}
        data-ad-slot={adSlot} />
    );
  }
}