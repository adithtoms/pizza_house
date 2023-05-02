import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Register from './pages/Register'
import {BrowserRouter, Route,  Routes } from 'react-router-dom'
import Orders from './pages/Orders';
import Admin from './pages/Admin';

function App() {
  return (
    <>
    <Header/>
    
   <BrowserRouter>
     <Routes>
       <Route path='/' exact Component={Home}/>
       <Route path='/admin' Component={Admin}/>
       <Route path='/cart' exact Component={Cart}/>
       <Route path='/login' exact Component={Login}/>
       <Route path='/order' exact Component={Orders}/>
       <Route path='/register' exact Component={Register}/>
     </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
