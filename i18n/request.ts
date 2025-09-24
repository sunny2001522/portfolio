import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This can either be defined statically at the top level of the file,
  // or when you have a locale segment, read from the pathname.
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as "en" | "zh")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await import(`../messages/${locale}.json`).catch(() => 
        import(`../messages/${routing.defaultLocale}.json`)
      )
    ).default
  };
});