import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './@exercism-ui-avatar';

export default {
  title: 'Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => (
  <Avatar {...args} src={`https://i.pravatar.cc/${args.size}`} />
);

export const Image = Template.bind({});
Image.args = {
  size: 128,
};
