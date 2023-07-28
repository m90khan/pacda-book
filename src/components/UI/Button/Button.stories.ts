import type { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/NLhz44T62V7xdfhv1aFhZy/Law-Firm-Webflow-Website-Template-(Community)?type=design&node-id=6-5813&mode=design&t=igmi5O8yaFtH1Pse-4',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};

export const Inaccessible: Story = {
  args: {
    label: 'Button',
    backgroundColor: 'red',
    color: 'red',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  },
};
