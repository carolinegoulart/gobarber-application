import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

// in order for the Error component get the props from Tooltip styled(Tooltip),
// (file style.ts of the Input component), it's necessary to set a variable
// className on the interface of Tooltip and pass it in the co
const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
