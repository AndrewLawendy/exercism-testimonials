/** @jsxImportSource theme-ui */
import { Story, Meta } from '@storybook/react';
import { Menu, MenuItem } from './@exercism-ui-menu';
import { Logo } from '@exercism-testimonials/@exercism-ui/icons';

export default {
  title: 'Menu',
} as Meta;

const Template: Story = () => (
  <Menu menuButton={<Logo sx={{ width: 42, height: 42 }} />}>
    <MenuItem>Ruby</MenuItem>
    <MenuItem>Rust</MenuItem>
    <MenuItem>C#</MenuItem>
    <MenuItem>Javascript</MenuItem>
  </Menu>
);

export const Primary = Template.bind({});
Primary.args = {};
