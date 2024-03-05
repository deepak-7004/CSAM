/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { LogLevel } from '@azure/msal-browser';
import { clientId, redirectUri } from 'csam/utils/Constants';

export const msalConfig = {
  auth: {
    clientId,
    authority: 'https://login.microsoftonline.com/cef04b19-7776-4a94-b89b-375c77a8f936',
    redirectUri,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
          default:
            console.warn(`Unexpected log level: ${level}`);
        }
      },
    },
  },
};
