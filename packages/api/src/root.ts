import { authRouter } from "./router/auth";
import { documentRouter } from "./router/document";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  documents: documentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
