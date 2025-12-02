// import { withAccelerate } from "@prisma/extension-accelerate";
// import { PrismaClient } from "../../../generated/prisma";

// const prismaExtended = new PrismaClient().$extends(withAccelerate());

// type ExtendedPrisma = typeof prismaExtended;

// declare global {
//   var prisma: ExtendedPrisma | undefined;
// }

// export const prisma: ExtendedPrisma = global.prisma || prismaExtended;

// if (process.env.NODE_ENV !== "production") {
//   global.prisma = prisma;
// }

// src/lib/db/db.ts
import { PrismaClient } from "../../../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Create a plain Prisma client (dev)
 */
const createPrismaBaseClient = () => new PrismaClient();

/**
 * Create an accelerated client (prod)
 * We cast to PrismaClient so TS keeps a single consistent type.
 * Runtime: returns the extended client (with Accelerate).
 * Type-system: treated as PrismaClient to avoid union-of-signatures errors.
 */
const createAcceleratedClient = () =>
  (new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient);

declare global {
  // keep a single global in dev to avoid multiple connections on HMR
  // typed as PrismaClient so TS sees consistent API everywhere.
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  // production: use accelerated client (but typed as PrismaClient)
  prisma = createAcceleratedClient();
} else {
  // development: keep single instance on global (no accelerate)
  if (!global.prisma) {
    global.prisma = createPrismaBaseClient();
  }
  prisma = global.prisma;
}

export { prisma };
export type { PrismaClient };
