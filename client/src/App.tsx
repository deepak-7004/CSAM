import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'csam/components/thememonth.css';
import { InteractionStatus, InteractionType } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import 'csam/App.css';
import 'csam/Custom.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FeedbackModal from 'csam/components/FeedbackModal';
import router from 'csam/router';
import theme from 'csam/theme/theme';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();
  const queryClient = new QueryClient();

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect} authenticationRequest={{}}>
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>

          <Button onClick={handleOpen} className="doFeedBack">
            Feedback
          </Button>
          <FeedbackModal open={modalOpen} onClose={handleClose} />
        </QueryClientProvider>
      </MsalAuthenticationTemplate>

      {inProgress === InteractionStatus.None && !isAuthenticated && (
        <UnauthenticatedTemplate>
          <Typography>Your are not Authorized</Typography>
        </UnauthenticatedTemplate>
      )}
    </ThemeProvider>
  );
};

export default App;
