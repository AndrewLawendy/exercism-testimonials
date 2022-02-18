import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from './@exercism-ui-input';
import { Search, CaretRight } from 'libs/@exercism-ui/icons/src';

export default {
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Filter by exercise title',
  preDecorator: '',
  postDecorator: '',
};

export const Decorators = () => (
  <Input preDecorator={<Search />} postDecorator={<CaretRight />} />
);
