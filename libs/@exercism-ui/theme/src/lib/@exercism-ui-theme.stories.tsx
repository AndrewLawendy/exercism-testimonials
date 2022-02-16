import { Story, Meta } from '@storybook/react';
import { ExercismUiTheme, ExercismUiThemeProps } from './@exercism-ui-theme';

export default {
  component: ExercismUiTheme,
  title: 'ExercismUiTheme',
} as Meta;

const Template: Story<ExercismUiThemeProps> = (args) => (
  <ExercismUiTheme {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
