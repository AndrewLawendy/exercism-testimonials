import { Story, Meta } from '@storybook/react';
import { ExercismUi, ExercismUiProps } from './exercism-ui';

export default {
  component: ExercismUi,
  title: 'ExercismUi',
} as Meta;

const Template: Story<ExercismUiProps> = (args) => <ExercismUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
