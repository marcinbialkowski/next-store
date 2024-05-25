import { ImageResponse } from 'next/og';
import { getProduct } from '@/services/products';

interface ProductImageProps {
  params: { productSlug: string };
}

export const size = {
  width: 800,
  height: 800,
};

export const generateImageMetadata = async ({ params }: ProductImageProps) => {
  const product = await getProduct(params.productSlug);

  return [
    {
      id: product?.id ?? '',
      alt: product?.primaryImage.alt ?? '',
      contentType: 'image/png',
    },
  ];
};

const ProductImage = async ({ params }: ProductImageProps) => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    return null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(${product.primaryImage.url})`,
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '100px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: '32px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            paddingTop: '24px',
            paddingBottom: '24px',
          }}
        >
          <h1 style={{ maxWidth: '600px', margin: 'auto' }}>{product.name}</h1>
          <p style={{ maxWidth: '600px', margin: 'auto' }}>
            {product.description}
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
};

export default ProductImage;
