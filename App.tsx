/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Navigation} from './src/infrastructure/navigation/index.navigator';

import {theme} from './src/infrastructure/theme';

function App(): JSX.Element | null {
  return (
    <ThemeProvider theme={theme}>
      <Navigation></Navigation>
    </ThemeProvider>
  );
}

export default App;
