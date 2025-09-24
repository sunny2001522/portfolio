
'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '../i18n';
import { Resource, createInstance } from 'i18next';
import { useRef } from 'react';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}) {
  const i18n = useRef(createInstance()).current;

  i18n.init({
    lng: locale,
    resources,
    ns: namespaces,
    fallbackLng: locale,
    preload: typeof window === 'undefined' ? [locale] : [],
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
