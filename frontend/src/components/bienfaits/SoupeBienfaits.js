import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";

const SoupeBienfaits = ({ reff }) => {
  return (
    <DialogContentText id="scroll-dialog-description" ref={reff} tabIndex={-1}>
      <p>
        - Au cœur de l’hiver, quoi de mieux qu’une bonne soupe pour se
        réchauffer ? Les bienfaits de la soupe ne résident pas que dans son
        pouvoir réchauffant, mais avec de bons légumes de saison, il est
        possible de faire de véritables potions magiques, pleines de qualités
        nutritionnelles sans mettre le bon goût de côté. Pour vous en faire
        profiter, je vous propose de découvrir les nombreuses vertus des soupes
        maison.
      </p>
      <h4 className="color-bewell">
        Les soupes : Idéal dans le cadre d’un régime ou d’une alimentation saine
      </h4>
      <p>
        - Les soupes peuvent être préparées avec une multitude d’ingrédients.
        Mais tout l’intérêt des soupes maison est d’être faite à partir de
        légumes frais. Ainsi, il est possible d’avoir un plat très faible en
        calories, pour peu que l’on s’abstienne d’y rajouter de la crème
        fraîche, pour les plus gourmandes, ou des croûtons par exemple.
      </p>
      <p>
        - Même avec ses petits écarts, la soupe reste un plat pauvre en
        calories, avec en moyenne de 25 à 30 calories pour 100 grammes. De plus,
        en dégustant sa soupe en entrée, le bénéfice sera encore plus grand car
        elle aura un effet rassasiant, qui va réduire d’autant l’envie de se
        jeter sur la suite du repas, pour peu que l’on est choisi de faire un
        festin ce jour là.
      </p>
      <p>
        - Bref, un atout considérable autant pour celles qui souhaitent réduire
        leur apport calorique sur chaque repas que pour celles qui souhaitent
        faire le plein de bonnes choses.
      </p>
      <h4 className="color-bewell">Un plat bourré de bonnes choses</h4>
      <p>
        - La soupe maison a pour avantage, par rapport aux soupes industrielles,
        de ne pas contenir d’ingrédients néfastes, tel que le sodium dont les
        fabricants usent et abusent afin de proposer une coloration spécifique à
        leur produit.
      </p>
      <p>
        - Ainsi, la soupe maison permet de conserver les propriétés
        nutritionnelles des aliments, comme les minéraux et les vitamines qui ne
        se dégradent pas, et restent indispensables au bon fonctionnement de
        notre organisme.
      </p>
      <p>
        - La soupe maison contient de fait aussi d’autres éléments
        indispensables, comme des fibres et des antioxydants, dont les vertus
        sont autant d’atouts pour notre santé. De nombreuses études ont par
        ailleurs démontré que les soupes permettaient de réduire les risques de
        cancer, notamment du côlon, ainsi que les problèmes cardiovasculaires.
      </p>
      <p>
        - En définitive, les apports de la soupe sont nombreux pour être en
        forme, sous réserve de les réaliser soi même avec de bons ingrédients, à
        savoir des légumes de saison.
      </p>
    </DialogContentText>
  );
};

export default SoupeBienfaits;
