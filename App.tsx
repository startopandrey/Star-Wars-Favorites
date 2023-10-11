/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Navigation} from './src/infrastructure/navigation/index.navigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/infrastructure/theme';

function App(): JSX.Element | null {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={DefaultTheme}>
        <Navigation></Navigation>
      </PaperProvider>
    </ThemeProvider>
  );
}

export default App;
