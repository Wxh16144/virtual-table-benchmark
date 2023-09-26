
import 'normalize.css';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

// @ts-ignore
import routes from '~react-pages';

window.console.log('%cPlayground => main.tsx', 'color:#0B7EA4;', {
  routes,
});

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>
);
