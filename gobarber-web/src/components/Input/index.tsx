import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
// IconBaseProps: props that a icon might have
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

// extends all attributes from the native input tag, but sets the name as
// mandatory (in native html, tha name is not mandatory)
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;

  // receives an component as a prop
  icon?: React.ComponentType<IconBaseProps>;
}

// since Icon is a component, we have to capitalize it
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  // updates inputRef when we call useField()
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {/* Icon &&: shows icon only if it exists */}
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        // error extends from Tooltip, and Tooltip needs to receive a title
        <Error title={error}>
          <FiAlertCircle color='c53030' size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
