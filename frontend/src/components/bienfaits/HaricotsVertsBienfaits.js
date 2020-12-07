import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const HaricotsVertsBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>
        Allié incontournable de votre confort alimentaire, le haricot a un fort
        pouvoir de satiété. Il vous apporte en plus fibres, vitamines et
        oligoéléments.
      </p>
      <p>Pour 100g de haricot vert :</p>
      <img src={require("../images/bienfaits/haricots-verts.jpg")} alt="" />
    </DialogContentText>
  );
};

export default HaricotsVertsBienfaits;
