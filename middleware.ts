import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
  localePrefix: localePrefix,
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  //   matcher: ["/", "/(th|en)/:path*"],
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
