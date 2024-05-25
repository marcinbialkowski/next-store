import clsx from 'clsx';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { type Image } from '@/services/images';

interface ProductImageProps {
  className?: string;
  image: Image;
  priority?: NextImageProps['priority'];
}

export const ProductImage = ({
  className,
  image,
  priority,
}: ProductImageProps) => (
  <NextImage
    alt={image.alt}
    src={image.url}
    className={clsx(
      className,
      'aspect-square w-full object-cover object-center',
    )}
    priority={priority}
    width={image.width}
    height={image.height}
  />
);
