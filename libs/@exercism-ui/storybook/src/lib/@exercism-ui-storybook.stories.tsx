import { Story, Meta } from '@storybook/react';
import {
  ExercismUiStorybook,
  ExercismUiStorybookProps,
} from './@exercism-ui-storybook';

export default {
  component: ExercismUiStorybook,
  title: 'ExercismUiStorybook',
} as Meta;

const Template: Story<ExercismUiStorybookProps> = (args) => (
  <ExercismUiStorybook {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
