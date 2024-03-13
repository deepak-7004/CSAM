import { EventType, PublicClientApplication, type SilentRequest } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import App from 'csam/App';
import { msalConfig } from 'csam/auth/AuthConfig';
import { createRoot } from 'react-dom/client';
import 'csam/index.css';
import 'csam/i18n';

const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize().then(() => {
  if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]!);
  }

  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    const account = (event.payload as SilentRequest)?.account;
    if (event.eventType === EventType.LOGIN_SUCCESS && account) {
      msalInstance.setActiveAccount(account);
    }
  });
});

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
if (import.meta.env.DEV) {
  root.render(
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>,
  );
} else {
  root.render(
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>,
  );
}
