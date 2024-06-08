import { type ReactNode } from 'react';

interface StaticPageTemplateProps {
  children: ReactNode;
}

export const StaticPageTemplate = ({ children }: StaticPageTemplateProps) => (
  <article className="prose mx-auto pt-14">{children}</article>
);
