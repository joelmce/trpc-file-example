import type { TRPCRouterRecord } from "@trpc/server";
import { octetInputParser } from "@trpc/server/unstable-core-do-not-import";

import { protectedProcedure } from "../trpc";

export const documentRouter = {
  upload: protectedProcedure.input(octetInputParser).mutation(({ input }) => {
    console.log(input);
  }),
} satisfies TRPCRouterRecord;
