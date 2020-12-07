import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const MaisBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>Le maïs (Zea mays) appartient à la famille des Poaceae.</p>
      <p>Pour 100g de mais :</p>
      <img src={require("../images/bienfaits/mais.jpg")} alt="" />
    </DialogContentText>
  );
};

export default MaisBienfaits;
