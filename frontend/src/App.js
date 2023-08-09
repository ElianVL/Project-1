import {BrowserRouter, Routes, Route} from  "react-router-dom";

//components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";


import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage"; 
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage"; 
import UserOrdersPage from "./pages/user/UserOrdersPage"; 
import UserProfilePage from "./pages/user/UserProfilePage"; 


//protected admin pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
 

import ScrollToTop from "./utils/ScrollToTop";


function App() {
  return ( 
    <BrowserRouter> 
    <ScrollToTop />
    <HeaderComponent />
    <Routes>
      <Route element={<RoutesWithUserChatComponent />}>
      
      
        {/*public available routes:*/}
      <Route path='/' element={<HomePage />} />
      <Route path='/CartPage' element={<CartPage />} />
      <Route path='/LoginPage' element={<LoginPage />} />
      <Route path='/ProductDetailsPage' element={<ProductDetailsPage />} />
      <Route path='/ProductListPage' element={<ProductListPage />} />
      <Route path='/RegisterPage' element={<RegisterPage/>} />

      {/*user protected routes:*/}

        <Route element={<ProtectedRoutesComponent admin={false}/>}>
        <Route path='/user/UserCartDetails' element={<UserCartDetailsPage/>} />
        <Route path='/user/UserOrderDetailsPage' element={<UserOrderDetailsPage/>} />
        <Route path='/user/UserOrdersPage' element={<UserOrdersPage/>} />
        <Route path='/user/UserProfilePage' element={<UserProfilePage/>} />
        </Route>

      </Route>



       {/*admin protected routes:*/}

       <Route element={<ProtectedRoutesComponent admin={true}/>}>
        <Route path='/admin/AdminAnalyticsPage' element={<AdminAnalyticsPage/>} />
        <Route path='/admin/AdminChatsPage' element={<AdminChatsPage/>} />
        <Route path='/admin/AdminCreateProductPage' element={<AdminCreateProductPage/>} />
        <Route path='/admin/AdminEditProductPage' element={<AdminEditProductPage/>} />
        <Route path='/admin/AdminEditUserPage' element={<AdminEditUserPage/>} />
        <Route path='/admin/AdminOrderDetailsPage' element={<AdminOrderDetailsPage/>} />
        <Route path='/admin/AdminOrdersPage' element={<AdminOrdersPage/>} />
        <Route path='/admin/AdminProductsPage' element={<AdminProductsPage/>} />
        <Route path='/admin/AdminUsersPage' element={<AdminUsersPage/>} />

      </Route>


      </Routes>
      <FooterComponent />
    </BrowserRouter>
  
  );
}

export default App;
