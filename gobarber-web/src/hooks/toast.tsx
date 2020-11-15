import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// Provider: used in App.tsx -> AppProvider to create the context
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      // setMessages([...messages, toast]); OR
      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

// this function will return a ToastContextData (enable access to the context and
// the functions addToast and removeToast), but for the context to work,
// useToast needs to be inside a <ToastProvider> (App.tsx -> <AppProvider>)
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
