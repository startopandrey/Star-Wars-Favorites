import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FollowersNavigator} from './followers.navigator';

export const Navigation = (): React.JSX.Element | null => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return null;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <FollowersNavigator /> : null}
    </NavigationContainer>
  );
};
