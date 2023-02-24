import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFount from './component/notFound/NotFound';
import Main from './component/main/Main';
import LatestRates from './component/latestRates/LatestRates';
import ConvertCurrency from './component/convertCurrency/ConvertCurrency';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFount />,
        children: [
            { index: true, element: <Main /> },
            { path: '/LatestRates', element: <LatestRates /> },
            { path: '/ConvertCurrency', element: <ConvertCurrency /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
