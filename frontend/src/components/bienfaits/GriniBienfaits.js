import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const GriniBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>Pour 100g de grini :</p>
      <img src={require("../images/bienfaits/grini.jpg")} alt="" />
    </DialogContentText>
  );
};

export default GriniBienfaits;
