import { Story, Meta } from '@storybook/react';
import {
  ColorsWrapper,
  SpaceWrapper,
  ShadowWrapper,
} from './@exercism-ui-theme-story-wrapper';

export default {
  title: 'Theme',
} as Meta;

export const Colors: Story = () => <ColorsWrapper />;

export const Space: Story = () => <SpaceWrapper />;

export const Shadow: Story = () => <ShadowWrapper />;
