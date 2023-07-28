import type { Meta, StoryObj } from '@storybook/react';
import { productData } from './../../../content/products';
import Card from './index';
const meta = {
  title: 'Components/Card',
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const product = {
  id: 11,
  title: 'perfume Oil',
  description:
    'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
  price: 13,
  discountPercentage: 8.4,
  rating: 4.26,
  stock: 65,
  brand: 'Impression of Acqua Di Gio',
  category: 'fragrances',
  thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/11/1.jpg',
    'https://i.dummyjson.com/data/products/11/2.jpg',
    'https://i.dummyjson.com/data/products/11/3.jpg',
    'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  ],
};
export const Default: Story = {
  args: {
    product: product,
  },
};
