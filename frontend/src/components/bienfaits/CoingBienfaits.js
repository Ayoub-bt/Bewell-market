import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const CoingBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <h5>Trois raisons santé de manger des coings:</h5>
      <ul>
        <li>
          <span className="color-bewell">Il calme la diarrhée</span>
          <p>
            le coing renferme des polyphénols et des pectines. « Les premiers
            ralentissent les contractions de l’intestin et ont également un
            effet antiseptique, les secondes retiennent l’eau, ce qui permet
            d’enrayer plus rapidement une diarrhée », précise la diététicienne.
            Le sirop de coing est d’ailleurs utilisé, en pharmacie, pour lutter
            contre la diarrhée.
          </p>
        </li>
        <li>
          <span className="color-bewell">Il reminéralise l’organisme</span>
          <p>
            le coing renferme de nombreux minéraux : du potassium, du phosphore,
            du magnésium, du calcium, du sodium, de l’iode, du zinc et du fer.
            Les quantités varient de 5 % à 13 % des apports journaliers
            recommandés. « Ces minéraux sont importants pour les os, les
            muscles, le système nerveux, le système immunitaire... », rappelle
            la diététicienne.
          </p>
        </li>
        <li>
          <span className="color-bewell">
            Il favorise la régulation du cholestérol
          </span>
          <p>
            le coing fournit, en grande majorité (75 %), des fibres insolubles
            comme la cellulose, la lignine. « Elles ont la capacité de ralentir
            l’absorption des graisses par le système digestif et de favoriser
            leur bonne élimination, ce qui aide à maintenir un taux de
            cholestérol correct », ajoute la diététicienne.
          </p>
        </li>
      </ul>
      <p>Pour 100g de coing :</p>
      <img src={require("../images/bienfaits/coing.jpg")} alt="" />
    </DialogContentText>
  );
};

export default CoingBienfaits;
