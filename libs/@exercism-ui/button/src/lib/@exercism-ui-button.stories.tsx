import { Story, Meta } from '@storybook/react';
import {
  Button,
  ButtonToggle as ButtonToggleExample,
} from './@exercism-ui-button';
import { ArrowRight } from '@exercism-testimonials/@exercism-ui/icons';

export default {
  title: 'Button',
} as Meta;

const ButtonTemplate: Story = (args, { parameters: { icon } }) => (
  <Button {...args} icon={icon}>
    Click Me!
  </Button>
);

export const Default = ButtonTemplate.bind({});
Default.args = {
  disabled: false,
};

export const ButtonIcon = ButtonTemplate.bind({});
ButtonIcon.args = {
  disabled: false,
  iconPosition: 'start',
};
ButtonIcon.argTypes = {
  iconPosition: {
    options: ['start', 'end'],
    control: { type: 'radio' },
  },
};
ButtonIcon.parameters = {
  icon: <ArrowRight />,
};

const ButtonToggleTemplate: Story = (args) => (
  <ButtonToggleExample {...args}>1</ButtonToggleExample>
);

export const ButtonToggle = ButtonToggleTemplate.bind({});
ButtonToggle.args = {
  disabled: false,
  active: false,
};
