
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontEndLayout from './components/Layouts/FrontEndLayout';
import Home from './components/FrontEnd/Home';
import AdminLayout from './components/Layouts/AdminLayout';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Products from './components/Admin/Products';
import Orders from './components/Admin/Orders';
import Categories from './components/Admin/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<FrontEndLayout />}>
            <Route path='/' element={<Home />}></Route>
        </Route>

        <Route path='/admin' exact element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
            <Route path='/admin/user' element={<Users />}></Route>
            <Route path='/admin/products' element={<Products />}></Route>
            <Route path='/admin/orders' element={<Orders />}></Route>
            <Route path='/admin/categories' element={<Categories />}></Route>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
