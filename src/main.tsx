
import 'normalize.css';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'antd-style'

// @ts-ignore
import routes from '~react-pages';
import MuiThemeProvider from './common/mui';

window.console.log('%cPlayground => main.tsx', 'color:#0B7EA4;', {
  routes,
});

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colorBgContainer};
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MuiThemeProvider>
    <ThemeProvider themeMode="auto">
      <Global />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
);
