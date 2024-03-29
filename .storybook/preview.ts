import type { Preview } from '@storybook/react';
import { globalDecorators } from './decorators';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { viewports as breakpoints } from '../src/styles/breakpoints';
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  };
  return acc;
}, {} as typeof INITIAL_VIEWPORTS);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: globalDecorators,
};

export default preview;
