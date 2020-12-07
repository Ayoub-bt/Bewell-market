import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Product Reducers
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from "./reducers/productReducers";

// Cart Reducers
import { cartReducer } from "./reducers/cartReducers";

// User Reducers
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

// Order Reducers
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderTraitementReducer,
  orderPrepaReducer,
  orderDeliverReducer,
  orderCancelReducer,
  orderPaidReducer,
  orderListMyReducer,
  orderListReducer,
  orderUpdateDeliveredByReducer,
} from "./reducers/orderReducers";

// Blog Reducers
import {
  postsListReducer,
  postDetailsReducer,
  postDeleteReducer,
  postCreateReducer,
  postUpdateReducer,
} from "./reducers/blogReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderTraitement: orderTraitementReducer,
  orderPrepa: orderPrepaReducer,
  orderDeliver: orderDeliverReducer,
  orderCancel: orderCancelReducer,
  orderPaid: orderPaidReducer,
  orderUpdateDeliveredBy: orderUpdateDeliveredByReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  postsList: postsListReducer,
  postDetails: postDetailsReducer,
  postDelete: postDeleteReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
});

// Get cart items from local Storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
// Get user info from local Storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
// Get shipping address from local Storage
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

// Initial State
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
