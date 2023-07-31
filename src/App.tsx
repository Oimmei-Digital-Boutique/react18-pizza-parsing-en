import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import PizzaWrapper from './pages/PizzaWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PizzaWrapper/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
