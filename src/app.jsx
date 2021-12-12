import * as React from 'react';
import { runApp } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const locale = getLocale();
const appConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
  // request: {
  //   baseURL: '//localhost:18080/',
  // },
};
runApp(appConfig);
