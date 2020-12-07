import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/home/Home";
import BlogScreen from "./components/blog/Blog";
import SingleBlog from "./components/blog/recettes/SingleBlog";
import Navbar from "./components/navigation/Navbar";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./components/cart/Cart";
import SingleProductScreen from "./screens/SingleProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import OrderScreen from "./screens/OrderScreen";
import Footer from "./components/footer/Footer";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileOrdersScreen from "./screens/ProfileOrdersScreen";
import UserListScreen from "./screens/UserListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import BlogListScreen from "./screens/BlogListScreen";
import BlogEditScreen from "./screens/BlogEditScreen";
import OrderToPrintScreen from "./screens/OrderToPrintScreen";
import TermsOfUseScreen from "screens/TermsOfUseScreen";
import ContactScreen from "screens/ContactScreen";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Navbar />
        {/* <Header /> */}
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/orders" component={ProfileOrdersScreen} />
        {/* <Route path="/aboutUs" component={AboutUsScreen} /> */}
        <Route path="/contact" component={ContactScreen} />
        <Route exact path="/products" component={ProductsScreen} />
        <Route path="/product/:id" component={SingleProductScreen} />
        <Route exact path="/blog" component={BlogScreen} />
        <Route path="/blog/:id" component={SingleBlog} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/orderlist" component={OrderListScreen} />
        <Route exact path="/admin/productlist" component={ProductListScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route exact path="/admin/bloglist" component={BlogListScreen} />
        <Route path="/admin/blog/:id/edit" component={BlogEditScreen} />
        <Route path="/admin/orderToPrint/:id" component={OrderToPrintScreen} />
        <Route path="/termsOfUse" component={TermsOfUseScreen} />
        {/* <Route
          path="/admin/order/:id/editDeliveredBy"
          component={DeliveredByModal}
        /> */}
        <Footer />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
