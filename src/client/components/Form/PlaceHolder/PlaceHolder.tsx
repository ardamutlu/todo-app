import React from 'react';
import ContentLoader from 'react-content-loader';

export const PlaceHolder = () => (
  <ContentLoader height={475} width={660} speed={2}>
    <circle cx="16" cy="31" r="15" />
    <rect x="40" y="18" rx="0" ry="0" width="100%" height="9" />
    <rect x="40" y="35" rx="0" ry="0" width="100%" height="10" />
    <circle cx="16" cy="71" r="15" />
    <rect x="40" y="58" rx="0" ry="0" width="100%" height="9" />
    <rect x="40" y="75" rx="0" ry="0" width="100%" height="10" />
    <circle cx="16" cy="111" r="15" />
    <rect x="40" y="98" rx="0" ry="0" width="100%" height="9" />
    <rect x="40" y="115" rx="0" ry="0" width="100%" height="10" />
  </ContentLoader>
);
