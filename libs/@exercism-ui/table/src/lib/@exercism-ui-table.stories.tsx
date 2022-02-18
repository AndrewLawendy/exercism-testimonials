import { Story, Meta } from '@storybook/react';
import TableWrapperApp from './@exercism-ui-table-wrapper';

export default {
  title: 'Table',
} as Meta;

export const Basic: Story = () => <TableWrapperApp />;
