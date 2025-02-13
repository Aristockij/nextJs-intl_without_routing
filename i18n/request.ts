import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = process.env.LOCALE || "ru";

  return {
    locale,
    messages: (await import(`../localization/${locale}/common.json`)).default,
  };
});
