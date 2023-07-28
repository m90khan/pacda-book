import { darkTheme, lightTheme } from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
// import { withDesign } from '@storybook-addon-designs';

// import { withDesign } from 'storybook-addon-designs'
import { initialize, mswDecorator } from 'msw-storybook-addon';
initialize();

const withTheme = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  //   const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  const storyTheme = lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalDecorators = [mswDecorator, withTheme];
