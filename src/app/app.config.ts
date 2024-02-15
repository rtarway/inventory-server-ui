import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration,provideProtractorTestingSupport } from '@angular/platform-browser';
import { routeConfig } from './routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig), 
    provideProtractorTestingSupport(), 
    provideClientHydration(), provideHttpClient()
  ]
};
