import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/tr';

const enMessages = require('./messages/en.json');
const trMessages = require('./messages/tr.json');

const allMessages = {
  en: enMessages,
  tr: trMessages
};

export default function I18nProvider({ children }: any) {
  const locale = useSelector(({ i18n }: any) => i18n.lang);
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
