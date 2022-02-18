/** @jsxImportSource theme-ui */
import { AvatarProps as ThemeUIAvatarProps } from 'theme-ui';

export interface AvatarProps extends ThemeUIAvatarProps {
  src: string;
  size: number;
  alt: string;
}

export function Avatar({ src, size, alt, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
      }}
    />
  );
}

export default Avatar;
