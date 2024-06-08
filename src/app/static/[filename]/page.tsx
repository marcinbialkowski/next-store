import fs from 'node:fs';
import { notFound } from 'next/navigation';
import { type ComponentType } from 'react';
import { StaticPageTemplate } from '@/components/templates/static-page-template';

interface StaticPageProps {
  params: { filename: string };
}

export const generateStaticParams = () => {
  const currentDir = __dirname.split('/.next/server/')[1];

  return fs
    .readdirSync(`./src/${currentDir}`)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({ filename: name.replace('.mdx', '') }));
};

const StaticPage = async ({ params }: StaticPageProps) => {
  const Content = await import(`./${params.filename}.mdx`).then(
    (module: { default: ComponentType }) => module.default,
    () => notFound(),
  );

  return (
    <StaticPageTemplate>
      <Content />
    </StaticPageTemplate>
  );
};

export default StaticPage;
