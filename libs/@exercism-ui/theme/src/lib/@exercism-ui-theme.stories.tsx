import { Story, Meta } from '@storybook/react';
import {
  ColorsWrapper,
  SpaceWrapper,
  ShadowWrapper,
  FontWeightWrapper,
  TypographyWrapper,
} from './@exercism-ui-theme-story-wrapper';

export default {
  title: 'Theme',
} as Meta;

export const Colors: Story = () => <ColorsWrapper />;

export const Space: Story = () => <SpaceWrapper />;

export const Shadow: Story = () => <ShadowWrapper />;

export const FontWeights: Story = () => <FontWeightWrapper />;

export const Typography: Story = () => <TypographyWrapper />;
