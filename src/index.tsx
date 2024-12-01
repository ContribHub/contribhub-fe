import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//컴포넌트
import Home from './pages/Home';
import HeadLayout from './components/common/Layout/HeadLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
