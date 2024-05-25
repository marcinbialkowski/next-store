import { PrismaClient } from '@prisma/client';
import { type ITXClientDenyList } from '@prisma/client/runtime/library';

export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'info', 'warn', 'error']
      : ['warn', 'error'],
});

export type PrismaBaseClient = Omit<PrismaClient, ITXClientDenyList>;

export { type PrismaClient };
