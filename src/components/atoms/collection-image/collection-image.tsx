import clsx from 'clsx';
import NextImage from 'next/image';
import { type Image } from '@/services/images';

export interface CollectionImageProps {
  className?: string;
  image: Image;
}

export const CollectionImage = ({ className, image }: CollectionImageProps) => (
  <NextImage
    alt={image.alt}
    src={image.url}
    className={clsx(
      className,
      'aspect-[3/2] w-full object-cover object-center',
    )}
    width={image.width}
    height={image.height}
  />
);
