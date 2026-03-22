import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
 
const isPublicRoute = createRouteMatcher([
  "/",            // landing page — public
  "/sign-in(.*)", // sign-in — public
  "/sign-up(.*)", // sign-up — public
]);
 
export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect(); // redirects to /sign-in if not logged in
  }
});
 
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};