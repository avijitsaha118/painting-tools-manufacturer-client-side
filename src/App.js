import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import AddAReview from './pages/Dashboard/AddAReview';
import AddProduct from './pages/Dashboard/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageProducts from './pages/Dashboard/ManageProduct';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import RequireAdmin from './pages/Dashboard/RequireAdmin';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import ToolDetail from './pages/Home/ToolDetail';
import ToolDetails from './pages/Home/ToolDetails';
import ToolPurchase from './pages/Home/ToolPurchase';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import MyPortfolio from './pages/MyPortfolio';
import Reviews from './pages/Reviews';
import Footer from './shared/Footer';
import Header from './shared/Header';
import NotFound from './shared/NotFound';

function App() {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddAReview></AddAReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          {/* <Route path='payment/:id' element={<Payment></Payment>}></Route> */}
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='adddoctor' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>


        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>

        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ToolPurchase></ToolPurchase>
          </RequireAuth>

        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      {/* <Footer></Footer> */}

    </Header>
  );
}

export default App;
