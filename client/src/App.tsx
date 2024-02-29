import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'csam/components/thememonth.css';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import 'csam/App.css';
import 'csam/Custom.css';
import Layout from 'csam/components/Layout';
import Archives from 'csam/pages/Archives';
import Gamecontests from 'csam/pages/GameContest';
import Goodreads from 'csam/pages/GoodReads';
import Home from 'csam/pages/Home';
import Leaderboard from 'csam/pages/Leaderboard';
import Monthbanner from 'csam/pages/MonthBanner';
import Toolsresources from 'csam/pages/ToolsResources';
import theme from 'csam/theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Monthbanner" element={<Monthbanner />} />
          <Route path="Goodreads" element={<Goodreads />} />
          <Route path="Gamecontests" element={<Gamecontests />} />
          <Route path="Toolsresources" element={<Toolsresources />} />
          <Route path="Archives" element={<Archives />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Button>Feedback</Button>
  </ThemeProvider>
);

export default App;
