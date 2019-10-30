import React from 'react';
import { Helmet } from "react-helmet";

const MetaTags = props => {
  const { title, ogTitle, ogUrl, description, ogDescription, ogImage } = props;

  return <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={ogTitle} />
    <meta property="og:url" content={ogUrl} />
    <meta name="description" content={description} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
  </Helmet>
};

export default MetaTags;