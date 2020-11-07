import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
// IconBaseProps: props that a icon might have

import { Container } from './styles';

// extends all attributes from the native input tag, but sets the name as
// mandatory (in native html, tha name is not mandatory)
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;

  // receives an component as a prop
  icon?: React.ComponentType<IconBaseProps>;
}

// since Icon is a component, we have to capitalize it
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  // Icon &&: shows icon only if it exists
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
