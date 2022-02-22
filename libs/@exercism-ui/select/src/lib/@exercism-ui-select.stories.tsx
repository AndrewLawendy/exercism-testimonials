import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './@exercism-ui-select';

export default {
  title: 'Select',
} as Meta;

const Template: Story = (args: SelectProps) => (
  <Select
    {...args}
    placeholder="Select preferred language"
    options={[
      {
        label: 'Rust',
        value: 'rust',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
