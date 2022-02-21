import { Story, Meta } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './@exercism-ui-radio-button';

export default {
  title: 'RadioButton',
} as Meta;

const Template: Story<RadioButtonProps> = (args) => (
  <>
    <RadioButton {...args} name="story">
      Rust
    </RadioButton>
    <RadioButton {...args} name="story">
      C#
    </RadioButton>
    <RadioButton {...args} name="story">
      Javascript
    </RadioButton>
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
