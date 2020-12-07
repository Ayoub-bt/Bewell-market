import React from "react";
import $ from "jquery";
import "./bootstrap.min.css";
import "./navbar-style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

// Material ui icons
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ClearIcon from "@material-ui/icons/Clear";
import EmailIcon from "@material-ui/icons/Email";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

// React icons
import {
  AiOutlineHome,
  GiJigsawBox,
  FaRegNewspaper,
  AiOutlineUser,
  BiPackage,
  AiOutlinePoweroff,
  RiContactsBook2Fill,
  RiAdminFill,
  TiShoppingCart,
  GiWhiteBook,
} from "react-icons/all";

// Social media icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active");
  });

  $(".nav-link").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $("#sidebarCollapseX").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $(".sidebarCollapseX").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $("#productt").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $("#productt").on("click", function () {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
    }
  });

  $("#sidebarCollapse").on("click", function () {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
    }
  });

  $("#sidebarCollapseX").on("click", function () {
    $(".overlay").removeClass("visible");
  });
  $(".sidebarCollapseX").on("click", function () {
    $(".overlay").removeClass("visible");
  });
});

const Navbar = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <div className="overlay"></div> */}

      <div className="utility-nav d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <a href="mailto:bewelltomarket@gmail.com" className="text-white">
                <EmailIcon /> &nbsp;bewelltomarket@gmail.com
              </a>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <a
                href="https://api.whatsapp.com/send/?phone=212702433192&text&app_absent=0"
                className="text-white"
              >
                <WhatsAppIcon /> &nbsp;+212 702-433192
              </a>
            </div>

            <div className="col-12 col-md-6 text-right">
              Le minimum pour passer une commande est 100dh.
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-md navbar-light main-menu"
        style={{ boxShadow: "none" }}
      >
        <div className="container containerMobile">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn text-white d-block d-md-none"
          >
            <MenuIcon />
          </button>

          <Link className="navbar-brand" to="/">
            <img
              src={require("../images/jarda-logo.png")}
              alt="Jarda"
              width="100"
            />
          </Link>

          <ul className="navbar-nav ml-auto d-block d-md-none">
            <li className="nav-item" id="shoppingCartNav">
              <Link className="btn text-white" to="/cart">
                <ShoppingCart />
                {cartItems.length !== 0 && (
                  <span className="badge badge-danger">
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" id="productt">
                  Produits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {userInfo ? (
              !userInfo.isAdmin ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-0">
                    <Link className="btn text-white" to="/cart">
                      <ShoppingCart />{" "}
                      {cartItems.length !== 0 && (
                        <span className="badge badge-danger">
                          {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item mr-0 ml-3">
                    <Button
                      className="btn login-btn"
                      style={{ padding: ".75rem 1.5rem" }}
                      onClick={handleClick}
                    >
                      <AccountCircleIcon />
                      &nbsp; {userInfo.name} <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      PaperProps={{
                        style: {
                          transform: "translateX(20%) translateY(32%)",
                        },
                      }}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <Link to="/profile">
                        <MenuItem onClick={handleClose}>Mon Compte</MenuItem>
                      </Link>
                      <Link to="/orders">
                        <MenuItem onClick={handleClose}>Mes Commandes</MenuItem>
                      </Link>
                      <div onClick={logoutHandler}>
                        <MenuItem
                          onClick={handleClose}
                          style={{ borderTop: "1px solid #eeeeee" }}
                        >
                          <span className="mt-1">Se déconnecter</span>
                        </MenuItem>
                      </div>
                    </Menu>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item mr-0 ml-3">
                    <Button
                      className="btn login-btn"
                      style={{ padding: ".75rem 1.5rem" }}
                      onClick={handleClick}
                    >
                      <RiAdminFill />
                      &nbsp; {userInfo.name} <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      PaperProps={{
                        style: {
                          transform: "translateX(-25%) translateY(15%)",
                        },
                      }}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <Link to="/admin/productlist">
                        <MenuItem onClick={handleClose}>Produits</MenuItem>
                      </Link>
                      <Link to="/admin/userlist">
                        <MenuItem onClick={handleClose}>Utilisateurs</MenuItem>
                      </Link>
                      <Link to="/admin/orderlist">
                        <MenuItem onClick={handleClose}>Commandes</MenuItem>
                      </Link>
                      <Link to="/admin/bloglist">
                        <MenuItem onClick={handleClose}>Recettes</MenuItem>
                      </Link>
                      <div onClick={logoutHandler}>
                        <MenuItem
                          onClick={handleClose}
                          style={{ borderTop: "1px solid #eeeeee" }}
                        >
                          <span className="mt-1">Se déconnecter</span>
                        </MenuItem>
                      </div>
                    </Menu>
                  </li>
                </ul>
              )
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-0">
                  <Link className="btn text-white" to="/cart">
                    <ShoppingCart />{" "}
                    {cartItems.length !== 0 && (
                      <span className="badge badge-danger">
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </span>
                    )}
                  </Link>
                </li>
                <li className="nav-item mr-0 ml-3">
                  <Link className="btn login-btn" to="/login">
                    <AccountCircleIcon /> S'identifier / S'inscrire
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      <nav id="sidebar">
        <div className="sidebar-header">
          <div className="container">
            <div className="row align-items-center">
              {userInfo ? (
                <div className="col-9 pl-0">
                  <Link
                    className="btn sidebarCollapseX"
                    style={{ fontSize: "0.9rem", padding: 0 }}
                    to="/profile"
                  >
                    <AccountCircleIcon /> &nbsp;{userInfo.name}
                  </Link>
                </div>
              ) : (
                <div className="col-9 pl-0">
                  <Link className="btn sidebarCollapseX bg-bewell" to="/login">
                    <AccountCircleIcon /> &nbsp;S'identifier
                  </Link>
                </div>
              )}

              <div className="col-3">
                <button
                  type="button"
                  id="sidebarCollapseX"
                  className="btn btn-link"
                >
                  <ClearIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ul className="list-unstyled components links">
          {userInfo && !userInfo.isAdmin ? (
            <>
              {/* SIDEBAR (not admin) */}
              <li>
                <Link className="sidebarCollapseX" to="/">
                  <AiOutlineHome className="navLink-icon" />
                  &nbsp; Accueil
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/profile">
                  <AiOutlineUser className="navLink-icon" />
                  &nbsp; Mon compte
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/orders">
                  <BiPackage className="navLink-icon" />
                  &nbsp; Mes commandes
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/products">
                  <GiJigsawBox className="navLink-icon" />
                  &nbsp; Produits
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/cart">
                  <TiShoppingCart className="navLink-icon" />
                  &nbsp; Panier (
                  {cartItems.length !== 0
                    ? cartItems.reduce((acc, item) => acc + item.qty, 0)
                    : 0}
                  )
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/blog">
                  <FaRegNewspaper className="navLink-icon" />
                  &nbsp; Blog
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/contact">
                  <RiContactsBook2Fill className="navLink-icon" />
                  &nbsp; Contact
                </Link>
              </li>
            </>
          ) : userInfo && userInfo.isAdmin ? (
            <>
              {/* SIDEBAR (admin) */}
              <li>
                <Link className="sidebarCollapseX" to="/admin/userlist">
                  <AiOutlineUser className="navLink-icon" />
                  &nbsp; Utilisateurs
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/admin/orderlist">
                  <AiOutlineUser className="navLink-icon" />
                  &nbsp; Commandes
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/admin/bloglist">
                  <GiWhiteBook className="navLink-icon" />
                  &nbsp; Recettes
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/admin/productlist">
                  <GiJigsawBox className="navLink-icon" />
                  &nbsp; Produits
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/blog">
                  <FaRegNewspaper className="navLink-icon" />
                  &nbsp; Blog
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* SIDEBAR (not logged in) */}
              <li>
                <Link className="sidebarCollapseX" to="/">
                  <AiOutlineHome className="navLink-icon" />
                  &nbsp; Accueil
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/products">
                  <GiJigsawBox className="navLink-icon" />
                  &nbsp; Produits
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/cart">
                  <TiShoppingCart className="navLink-icon" />
                  &nbsp; Panier (
                  {cartItems.length !== 0
                    ? cartItems.reduce((acc, item) => acc + item.qty, 0)
                    : 0}
                  )
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/blog">
                  <FaRegNewspaper className="navLink-icon" />
                  &nbsp; Blog
                </Link>
              </li>
              <li>
                <Link className="sidebarCollapseX" to="/contact">
                  <RiContactsBook2Fill className="navLink-icon" />
                  &nbsp; Contact
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Logout btn */}
        {userInfo && (
          <ul className="list-unstyled components pt-0 mb-0">
            <li>
              <Link
                className="sidebarCollapseX py-1"
                onClick={logoutHandler}
                to="/"
              >
                <AiOutlinePoweroff className="navLink-icon" />
                &nbsp; Se déconnecter
              </Link>
            </li>
          </ul>
        )}

        {/* Social media icons */}
        <ul className="social-icons py-1">
          <li>
            <Link to="#" target="_blank" title="" className="pt-0">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" title="">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" title="">
              <YouTubeIcon />
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" title="">
              <TwitterIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
