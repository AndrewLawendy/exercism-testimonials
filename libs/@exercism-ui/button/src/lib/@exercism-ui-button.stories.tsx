import { Story, Meta } from '@storybook/react';
import {
  Button,
  ButtonToggle as ButtonToggleExample,
} from './@exercism-ui-button';

export default {
  title: 'Button',
} as Meta;

const ButtonTemplate: Story = (args) => <Button {...args}>Click Me!</Button>;

export const Default = ButtonTemplate.bind({});
Default.args = {
  disabled: false,
};

const ButtonToggleTemplate: Story = (args) => (
  <ButtonToggleExample {...args}>1</ButtonToggleExample>
);

export const ButtonToggle = ButtonToggleTemplate.bind({});
ButtonToggle.args = {
  disabled: false,
  active: false,
};
