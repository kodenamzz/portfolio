import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export const proxy = handleI18nRouting;

export const config = {
  // Match only internationalized pathnames
  //   matcher: ["/", "/(th|en)/:path*"],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
