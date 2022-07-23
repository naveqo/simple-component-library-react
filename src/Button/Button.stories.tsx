import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#1A202C' }
      ]
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'default'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'small'
};

export const Block = Template.bind({});
Block.args = {
  blocked: true,
  children: 'block'
};
