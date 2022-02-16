import { Story, Meta } from '@storybook/react';
import { ExercismUiTable, ExercismUiTableProps } from './@exercism-ui-table';

export default {
  component: ExercismUiTable,
  title: 'ExercismUiTable',
} as Meta;

const Template: Story<ExercismUiTableProps> = (args) => (
  <ExercismUiTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
