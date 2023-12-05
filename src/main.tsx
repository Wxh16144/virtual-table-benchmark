
import 'normalize.css';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'antd-style'
import { ConfigProvider } from 'antd'

// @ts-ignore
import routes from '~react-pages';

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
  <ThemeProvider themeMode="auto">
    <ConfigProvider theme={{ cssVar: true }}>
      <Global />
      <Router>
        <App />
      </Router>
    </ConfigProvider >
  </ThemeProvider>
);
