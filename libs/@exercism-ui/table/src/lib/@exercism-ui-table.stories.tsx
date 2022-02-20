import { Story, Meta } from '@storybook/react';
import {
  TableWrapperApp,
  NoDataTableWrapper,
} from './@exercism-ui-table-wrapper';

export default {
  title: 'Table',
} as Meta;

export const Basic: Story = () => <TableWrapperApp />;

export const NoData: Story = () => <NoDataTableWrapper />;
