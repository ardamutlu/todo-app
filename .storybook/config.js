import React from 'react';
import requireContext from 'require-context.macro';
import { configure, addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
// Load the locale data for all your defined locales
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/tr';
import { GlobalStyle } from '../src/client/components/App';

const enMessages = require('../src/client/i18n/messages/en.json');
const trMessages = require('../src/client/i18n/messages/tr.json');

const allMessages = {
  en: enMessages,
  tr: trMessages
};

const getMessages = (locale) => allMessages[locale];

// Set intl configuration
setIntlConfig({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  getMessages
});

// Register decorator
addDecorator(withIntl);

configure(requireContext('../src/client/components', true, /\.stories\.tsx?$/), module);

addDecorator((tree) => (
  <>
    <GlobalStyle />
    <div style={{ margin: '12px', fontSize: '1rem' }}>{tree()}</div>
  </>
));
