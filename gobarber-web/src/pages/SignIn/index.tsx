import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthContext';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        // object() because "data" has an object format
        // shape() defines the shape (attributes) of the data object
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        // since formRef is null when it is initialized, React inserts a "?",
        // to ensure setErrors is executed only if formRef is not null
        formRef.current?.setErrors(errors);
      }
    },
    // all external variables inside useCallback, useEffect, need to be included
    // inside the dependencies array
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt='GoBarber' />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />

          <Button type='submit'>Entrar</Button>

          <a href='forgot'>Esqueci minha senha</a>
        </Form>

        <a href=''>
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
