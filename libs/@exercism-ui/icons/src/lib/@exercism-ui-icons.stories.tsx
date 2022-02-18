/** @jsxImportSource theme-ui */
import { Story, Meta } from '@storybook/react';
import * as icons from './@exercism-ui-icons';

export default {
  title: 'Icons',
} as Meta;

const Template: Story = () => (
  <div sx={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(8, 1fr)' }}>
    {Object.entries(icons).map(([name, Icon]) => (
      <div key={name} sx={{ textAlign: 'center', p: 'spacing-m' }}>
        <Icon />
        <p sx={{ m: 0 }}>{name}</p>
      </div>
    ))}
  </div>
);

export const Set = Template.bind({});
Set.args = {};
