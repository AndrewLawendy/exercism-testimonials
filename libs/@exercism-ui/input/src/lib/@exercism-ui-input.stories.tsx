import { Story, Meta } from '@storybook/react';
import Input from './@exercism-ui-input';

export default {
  title: 'Input',
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Filter by exercise title',
};
