import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductPageTemplate } from '@/components/templates/product-page-template';
import { getProduct } from '@/services/products';

interface ProductPageProps {
  params: { productSlug: string };
}

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    return {};
  }

  const { description, name } = product;
  const title = `${name} - NextStore`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productSlug);

  if (!product) {
    notFound();
  }

  return <ProductPageTemplate product={product} />;
};

export default ProductPage;
