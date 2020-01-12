import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaytmButton from './PaytmButton';
import { getCheckSum } from '../../../data/app/appActions';

const variables = require('../../../../variables');
const { url, merchantId, orderId, customerId, amount, industryTypeId, channelId, website, callbackUrl, email, phone } = process.env.NODE_ENV === 'production' ? variables.PAYTM_PROD : variables.PAYTM_TEST;

class Pay extends Component {
  componentDidMount() {
    const { getCheckSum } = this.props;
    getCheckSum({
      'ORDER_ID': orderId,
      'MID': merchantId,
      'CUST_ID': customerId,
      'TXN_AMOUNT': amount,
      'INDUSTRY_TYPE_ID': industryTypeId,
      'CHANNEL_ID': channelId,
      'WEBSITE': website,
      'CALLBACK_URL': callbackUrl,
      'EMAIL': email,
      'MOBILE_NO': phone,
      'PAYMENT_MODE_ONLY': 'yes',
      'AUTH_MODE': '3D',
      'PAYMENT_TYPE_ID': 'DC',
    });
  }
  render() {
    const { app: { checksum } } = this.props;

    return <PaytmButton
      amount={amount}
      merchantId={merchantId}
      orderId={orderId}
      customerId={customerId}
      email={email}
      phone={phone}
      website={website}
      industryTypeId={industryTypeId}
      channelId={channelId}
      checksum={checksum}
      callbackUrl={callbackUrl}
      url={url}
      text={"Become a Sponsor"}/>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getCheckSum: data => dispatch(getCheckSum(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);