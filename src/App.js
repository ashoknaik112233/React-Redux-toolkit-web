import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom';

import Product from './components/Product';
import Dashbord from './components/Dashbord';

import Cart from './components/Cart';
import RootLayout from './components/RootLayout';


function App() {
  //To create router

  const router = createBrowserRouter(createRoutesFromElements(

    //2 routes -one index to show dashboard and other for cart
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashbord />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>

  ))
  //   <Route path="/" element={<RootLayout />}>

  //   < Route index element = {< Dashbord />}></Route >


  //     <Route path='/cart' element={<Cart />}></Route>
  //  </Route >


  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
