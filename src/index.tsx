import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//reset css
import './init.css';

//컴포넌트
import Home from './pages/Home';
import HeadLayout from './components/common/Layout/HeadLayout';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeadLayout>
      <RouterProvider router={router} />
    </HeadLayout>
  </React.StrictMode>
);
