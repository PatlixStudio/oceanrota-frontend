/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeTr);
registerLocaleData(localeDe);
registerLocaleData(localeEn);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
