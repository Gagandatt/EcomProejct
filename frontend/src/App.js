import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreens from "./Screens/HomeScreens";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from './Screens/UserListScreen'
import UserEditScreen from './Screens/UserEditScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import OrderListScreen from './Screens/OrderListScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Container>
      <Routes>
       <Route path="/" element={<HomeScreens/>}/>
       <Route path="/login" element={<LoginScreen/>}/>
       <Route path="/register" element={<RegisterScreen/>}/>
       <Route path="/shipping" element={<ShippingScreen/>}/>
       <Route path="/placeorder" element={<PlaceOrderScreen/>}/>
       <Route path="/profile" element={<ProfileScreen/>}/>
       <Route path="/payment" element={<PaymentScreen/>}/>
       <Route path="/product/:id" element={<ProductScreen/>}/>
       <Route path="/order/:id" element={<OrderScreen/>}/>
       <Route path="/cart/:id" element={<CartScreen/>}/>
       <Route path="/admin/userlist" element={<UserListScreen/>}/>
       <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />

       <Route
            path='/admin/productlist'
            element={<ProductListScreen/>}
            
          />
          <Route
            path='/admin/productlist/:pageNumber'
            element={<ProductListScreen/>}
            
          />
       <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
       <Route path='/admin/orderlist' element={<OrderListScreen/>} />
       <Route path='/search/:keyword' element={<HomeScreens/>} />
       <Route path='/page/:pageNumber' element={<HomeScreens/>}  />
          <Route
            path='/search/:keyword/page/:pageNumber'
            element={<HomeScreens/>}
          />
       <Route path="/cart/*" element={<CartScreen/>}/>
      </Routes>
      </Container>
      </main>
      <Footer />
  </Router>
  );
}

export default App;
