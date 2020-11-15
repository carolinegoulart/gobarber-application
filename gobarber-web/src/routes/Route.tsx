import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as RouteDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends RouteDOMRouteProps {
  isPrivate?: boolean;
  // allows calling a component in this way: component={Dashboard}, on the index.tsx file (routes)
  component: React.ComponentType;
}

/* 
meaning isPrivate === isSigned:

true/true: route is private, and user is authenticated - Ok
true/false: route is private, and user is not authenticated - REDIRECT TO LOGIN
false/true: route is public, and user is authenticated - REDIRECT TO DASHBOARD
false/false: route is public, and user is not authenticated - OK
*/

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // if the variable user contains data, the user is authenticated
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // !!user = is signed?
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
