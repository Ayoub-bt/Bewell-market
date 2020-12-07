import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const BetteravesBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>
        Antioxydante, riche en vitamines et minéraux, la betterave est une
        alliée naturelle pour préserver sa vue et maintenir une bonne santé
        cardiovasculaire.
      </p>
      <ul>
        <li>
          <span className="color-bewell">
            La betterave préserve la santé du cœur
          </span>
          <p>
            Elle renferme 266 mg de potassium aux 100 g, et des antioxydants.
          </p>
        </li>
        <li>
          <span className="color-bewell">
            La betterave contribue à prévenir le cancer
          </span>
          <p>
            Elle doit sa couleur à un pigment, la bétanine. « Cette substance
            favorise la destruction des cellules cancéreuses et évite qu’elles
            se multiplient », explique la diététicienne.
          </p>
        </li>
        <li>
          <span className="color-bewell">
            La betterave améliore la performance sportive
          </span>
          <p>
            Le jus de betterave renferme des nitrates qui sont transformés par
            le corps en nitrites puis en monoxyde d’azote qui « aide les muscles
            à consommer moins d’oxygène lors d’un effort sportif, et les rend
            plus efficaces », souligne la diététicienne.
          </p>
          <p>
            Pour un résultat positif, il faut boire un grand verre de jus de
            betterave plusieurs jours avant la compétition et le jour même, 2
            heures avant environ.
          </p>
        </li>
      </ul>
      <p>- Pour 72g de betteraves :</p>
      <img src={require("../images/bienfaits/betteraves.jpg")} alt="" />
    </DialogContentText>
  );
};

export default BetteravesBienfaits;
