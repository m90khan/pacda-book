import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/NLhz44T62V7xdfhv1aFhZy/Law-Firm-Webflow-Website-Template-(Community)?type=design&node-id=6-5813&mode=design&t=igmi5O8yaFtH1Pse-4',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Comfort food',
  },
};
