import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import MyButton from "./MyButton";
import CoingBienfaits from "./bienfaits/CoingBienfaits";
import MaisBienfaits from "./bienfaits/MaisBienfaits";
import GriniBienfaits from "./bienfaits/GriniBienfaits";
import BetteravesBienfaits from "./bienfaits/BetteravesBienfaits";
import HaricotsVertsBienfaits from "./bienfaits/HaricotsVertsBienfaits";
import SoupeBienfaits from "./bienfaits/SoupeBienfaits";
import CardonBienfaits from "./bienfaits/CardonBienfaits";

const BienfaitsDialog = ({ productName }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        onClick={handleClickOpen("paper")}
        className="bienfaitsBtn"
        color="primary"
      >
        Voir plus
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        id="bienfaitsDialog"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <MyButton
          tip="Fermer"
          onClick={handleClose}
          tipClassName="modalCloseBtn"
          tipPlacement="top"
        >
          <CloseIcon />
        </MyButton>
        <DialogTitle id="scroll-dialog-title">
          Bienfaits {productName}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {productName === "Maïs cuit à la vapeur" ? (
            <MaisBienfaits reff={descriptionElementRef} />
          ) : productName === "Coing cuit à la vapeur" ? (
            <CoingBienfaits reff={descriptionElementRef} />
          ) : productName === "Betteraves cuites à la vapeur" ? (
            <BetteravesBienfaits reff={descriptionElementRef} />
          ) : productName === "Haricots verts cuits à la vapeur" ? (
            <HaricotsVertsBienfaits reff={descriptionElementRef} />
          ) : productName === "Haricots blancs cuits à la vapeur" ? (
            <GriniBienfaits reff={descriptionElementRef} />
          ) : productName === "Soupe cuite à la vapeur" ? (
            <SoupeBienfaits reff={descriptionElementRef} />
          ) : productName === "Cardon cuit à la vapeur" ? (
            <CardonBienfaits reff={descriptionElementRef} />
          ) : (
            <h1>HHHHHHHHHHHHH others</h1>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

BienfaitsDialog.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default BienfaitsDialog;
