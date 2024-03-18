
import { Outlet } from 'react-router-dom';


import Nav from '../components/Nav';
import Header from '../components/Header';


export default function RootLayout() {


  return (
    <div>

      <Header />
      <Outlet />
      <Nav />


    </div>
  );


}