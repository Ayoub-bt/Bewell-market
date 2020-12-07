import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const CardonBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>
        Le cardon a une saveur proche à la fois de l’artichaut, du salsifi et du
        céleri et se cuisine au jus, ou bien avec du beurre ou de la crème, en
        gratin avec de la béchamel, en soupe. Son goût recherché s’allie
        notamment à de multiples bienfaits pour la santé :
      </p>
      <ul>
        <li>
          <p>
            Le cardon contient de la cynarine, qui est un dépurateur du foie et
            améliore la fonction hépatique de la vésicule biliaire
          </p>
        </li>
        <li>
          <p>Il est très peu calorique.</p>
        </li>
        <li>
          <p>
            Il est riche en fibres et en mucilage, et a de ce fait des
            propriétés bienfaisantes pour la régulation du transit intestinal.
          </p>
        </li>
        <li>
          <p>
            Il a une teneur importante en minéraux et oligo-éléments :
            magnésium, calcium, fer, sélénium, zinc, et surtout en potassium
            (400mg pour 100g) ce qui le rend intéressant pour lutter contre la
            tension artérielle.
          </p>
        </li>
        <li>
          <p>
            Il a des vertus antioxydantes grâce aux phyto-nutriments qu’il
            contient : acide caféique, silymarine, lutéoline.
          </p>
        </li>
        <li>
          <p>
            Il contient de l’inuline, qui est un glucide assimilable par les
            personnes souffrant de diabète.
          </p>
        </li>
      </ul>
      <p>
        En plus de ces qualités, sa graine peut être pour la fabrication du
        biodiesel “huile d’artichaut”, de la même façon que les graines de
        tournesol et de carthame.
      </p>
      <p>
        Le cardon (Cynara cardunculus) est aussi la matière première de la
        première bioraffinerie du monde et sert à la fabrication de plastique
        bio.
      </p>
      <p>Pour 100g de cardon :</p>
      <img src={require("../images/bienfaits/cardon.jpg")} alt="" />
    </DialogContentText>
  );
};

export default CardonBienfaits;
