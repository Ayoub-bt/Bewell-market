import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  withStyles,
  withWidth,
  isWidthUp,
  TextField,
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import ColoredButton from "../../shared/components/ColoredButton";
import WaveBorder from "../../shared/components/WaveBorder";

//Icons
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import YouTubeIcon from "@material-ui/icons/YouTube";

const styles = (theme) => ({
  footerInner: {
    backgroundColor: "#F8F8F8",
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#62ad42 !important",
  },
  socialIcon: {
    fill: "#fff",
    color: "#fff",
    backgroundColor: "#62ad42",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
    },
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn,
    }),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
  termsOfUse: {
    backgroundColor: "#62ad42",
    padding: "15px 0",
    fontSize: "0.8rem",
    textAlign: "center",
  },
});

const infos = [
  {
    icon: <WhatsAppIcon />,
    description: "+212 702-433192",
    href: "https://api.whatsapp.com/send/?phone=212702433192&text&app_absent=0",
  },
  {
    icon: <MailIcon />,
    description: "bewelltomarket@gmail.com",
    href: "mailto:bewelltomarket@gmail.com",
  },
];

const socialIcons = [
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    href: "https://facebook.com/bewell.market.ma",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    href: "https://www.Instagram.com/bewell.market",
  },
  {
    icon: <WhatsAppIcon />,
    label: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=212702433192&text&app_absent=0",
  },
  {
    icon: <YouTubeIcon />,
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCRL8TETJR7ItgpX-c1CvUfw",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

function Footer(props) {
  const { classes, theme, width } = props;
  return (
    <>
      <footer className="lg-p-top">
        <WaveBorder
          upperColor="#FFFFFF"
          lowerColor="#F8F8F8"
          animationNegativeDelay={4}
        />
        <div className={classes.footerInner} id="footerInner">
          <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
            {/* <Hidden mdDown> */}
            <Grid item xs={12} md={6} lg={3}>
              <Box display="flex">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={1} key={index}>
                      <Box mr={2}>
                        <IconButton
                          className={classes.infoIcon}
                          tabIndex={-1}
                          disabled
                        >
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Typography
                          className="infoFooter"
                          style={{ lineHeight: 2.5, fontSize: "1.1rem" }}
                          variant="h6"
                        >
                          <a href={info.href}>{info.description}</a>
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
            {/* </Hidden> */}

            <Grid item xs={12} md={6} lg={3}>
              {/* <img
              src={require("../images/jarda-logo.png")}
              width="200px"
              alt="LOGO"
            /> */}
              <Typography style={{ color: "#2b2b2b" }} paragraph>
                <span className="font-weight-bold color-bewell">JARDA</span> est
                une gamme de produits qui a pour objectif de vous faciliter la
                tâche.
              </Typography>
              <Box display="flex">
                {socialIcons.map((socialIcon, index) => (
                  <Box
                    key={index}
                    mr={index !== socialIcons.length - 1 ? 1 : 0}
                  >
                    <IconButton
                      aria-label={socialIcon.label}
                      className={classes.socialIcon}
                      href={socialIcon.href}
                      target="_blank"
                    >
                      {socialIcon.icon}
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={2}>
              <form>
                <Box display="flex" flexDirection="column">
                  <Box mb={1}>
                    <h4 className="mb-3 color-bewell">Liens</h4>
                    <Link to="/">
                      <p>
                        <KeyboardArrowRightIcon /> Accueil
                      </p>
                    </Link>
                    <Link to="/products">
                      <p>
                        <KeyboardArrowRightIcon /> Produits
                      </p>
                    </Link>
                    <Link to="/cart">
                      <p>
                        <KeyboardArrowRightIcon /> Panier
                      </p>
                    </Link>
                    <Link to="/profile">
                      <p>
                        <KeyboardArrowRightIcon /> Mon Compte
                      </p>
                    </Link>
                    <Link to="/blog">
                      <p>
                        <KeyboardArrowRightIcon /> Blog
                      </p>
                    </Link>
                    <Link to="/contact">
                      <p>
                        <KeyboardArrowRightIcon /> Contact
                      </p>
                    </Link>
                  </Box>
                </Box>
              </form>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <form>
                <Box display="flex" flexDirection="column">
                  <Box mb={1}>
                    <p>
                      Inscrivez-vous à la newsletter pour recevoir des offres
                      spéciales et exclusives nouvelles sur les produits de
                      Jarda
                    </p>
                    <TextField
                      variant="outlined"
                      placeholder="Votre email.."
                      inputProps={{ "aria-label": "Votre email" }}
                      InputProps={{
                        className: classes.whiteBg,
                      }}
                      fullWidth
                      required
                    />
                  </Box>
                  <ColoredButton
                    color={theme.palette.primary.main}
                    variant="contained"
                    className="text-white"
                    type="submit"
                  >
                    Envoyer
                  </ColoredButton>
                </Box>
              </form>
            </Grid>
          </Grid>
        </div>
      </footer>
      <Typography className={classes.termsOfUse}>
        <Link to="/termsOfUse" className="text-white">
          Conditions d'utilisation | Bewell Market
        </Link>
      </Typography>
    </>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
