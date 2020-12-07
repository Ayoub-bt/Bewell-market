import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Tooltip,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";
import WaveBorder from "../../shared/components/WaveBorder";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: "#62AD42",
  },
  logo: {
    maxWidth: 100,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    textTransform: "none",
    color: "#fff",
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Accueil",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/cart",
      name: "Panier",
      icon: <ShoppingCart className="text-white" />,
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/register",
      name: "S'inscrire",
      icon: <HowToRegIcon className="text-white" />,
    },
    {
      link: "/login",
      name: "Se connecter",
      icon: <LockOpenIcon className="text-white" />,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link to="/">
              <Tooltip title="Jarda">
                <img
                  src={require("../images/jarda-logo.png")}
                  alt="logo"
                  className={classes.logo}
                />
              </Tooltip>
            </Link>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon style={{ color: "#fff", fontSize: "2rem" }} />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {/* Home */}
              <Link
                to="/"
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                <Button
                  aria-label="Accueil"
                  color="secondary"
                  size="large"
                  classes={{ text: classes.menuButtonText }}
                >
                  Accueil
                </Button>
              </Link>
              {/* / */}

              {/* Blog */}
              <Link
                to="/blog"
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                <Button
                  aria-label="Blog"
                  color="secondary"
                  size="large"
                  classes={{ text: classes.menuButtonText }}
                >
                  Blog
                </Button>
              </Link>
              {/* / */}

              {/* Cart */}
              <Link
                to="/cart"
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                <Tooltip title="Panier">
                  <Button
                    aria-label="Panier"
                    color="secondary"
                    size="large"
                    classes={{ text: classes.menuButtonText }}
                  >
                    <ShoppingCart />
                  </Button>
                </Tooltip>
              </Link>
              {/* / */}

              {/* Blog */}
              <Link
                to="/login"
                className={classes.noDecoration}
                onClick={handleMobileDrawerClose}
              >
                <Button
                  aria-label="login"
                  color="secondary"
                  size="large"
                  classes={{ text: classes.menuButtonText }}
                >
                  Se connecter
                </Button>
              </Link>
              {/* / */}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={handleMobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
