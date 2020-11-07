import React from 'react';

import GlobalStyle from '../src/styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;