import React from 'react';
import { Button } from '@shopify/polaris';

const PolarisButton = ({ onClick, children }) => {
  return <Button onClick={onClick} size="large">{children}</Button>;
};

export default PolarisButton;
