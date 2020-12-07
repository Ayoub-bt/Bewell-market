import { Container } from "@material-ui/core";
import Meta from "components/Meta";
import React, { useEffect } from "react";

const TermsOfUseScreen = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <Container maxWidth="sm" className="lg-p-top3 termsOfUse">
      <Meta title="Conditions d'utilisation | Jarda" />
      <h4 className="text-center mb-4">Conditions d'utilisation</h4>
      <p>Section 1: Objet</p>
      <p>
        1.1 Les présentes conditions Générales de Vente (CGV) sont applicables à
        l’ensemble des produits proposés à la vente sur le site
        www.bewellmarket.ma
      </p>
      <p>
        1.2 Toute commande sur le site est conditionnée par la consultation et
        l’acceptation préalables et sans réserve de la part du Client des
        présentes CGV et des tarifs applicables.
      </p>
      <p>
        1.3 Le Site web a été élaboré dans le respect de la législation
        marocaine et notamment de la loi n°53-05 relative à l’échange
        électronique de données juridiques.
      </p>
      <p>
        1.4 Merci de lire attentivement les Conditions Générales de Vente (CGV)
        ci-dessous avant de passer commande de quelque produit ou service que ce
        soit sur www.bewellmarket.ma
      </p>
      <p>
        1.5 En passant une commande sur notre site, vous acceptez de vous
        soumettre à ces Conditions Générales de Vente.
      </p>
      <p>
        1.6 Les produits offerts sont ceux qui figurent dans le catalogue publié
        dans le site de www.bewellmarket.ma
      </p>
      <p>
        1.7 Ces produits sont offerts dans la limite des stocks disponibles.
      </p>
      <p>1.8 Chaque produit est accompagné d’un descriptif</p>
      <p>
        1.9 Les photographies du catalogue sont les plus fidèles possibles mais
        ne peuvent assurer une similitude parfaite avec le produit offert.
      </p>
      <p>Section 2 : Définitions</p>
      <p>
        2.1. “Accord” se réfère aux présentes Conditions Générales de Vente
        (CVG), la politique de confidentialité, les informations de paiement, et
        quoique ce soit que nous vous apportions
      </p>
      <p>
        2.2. La personne accédant au site internet, et passant commande pour un
        produit que nous y proposons. L’accès à www.bewellmarket.ma par un
        quelconque autre moyen vous lie également à ces Conditions Générales de
        Vente
      </p>
      <p>
        2.3. ‘’BEWELL MARKET’ se réfèrent à l'entreprise BEWELL COMMUNICATION
        dont le siège social est à 23 Bd Oukba Ibnou Nafii Hay Mohammadi
        CASBLANCA
      </p>
      <p>Bureau et showroom au : 3 rue ibnou Essali beleveder, Casablanca</p>
      <p>
        2.4. “Produits” se réfèrent à tous les produits que nous proposons à la
        vente sur notre site web
      </p>
      <p>
        2.5. “Service” ou “Services” se réfèrent à tous les services que nous
        proposons via notre site internet (livraison)
      </p>
      <p>
        2.6. “Site internet” se réfère à notre site internet
        www.bewellmarket.ma
      </p>
      <p>Section 3 : Coordonnées de la société</p>
      <p>
        3.1 La plateforme www.bewellmarket.ma est exploitée & éditée par la
        société BEWELL COMMUNICATION, immatriculé sous le numéro ice
        001793886000088, inscrite au Registre de commerce sous le numéro 367705
      </p>
      <p>
        3.2 Son siège social est situé à 23 Bd Oukba Ibnou Nafii Hay Mohammadi
        CASBLANCA
      </p>
      <p>Bureau et showroom au : 3 rue ibnou Essali beleveder, Casablanca</p>
      <p>Section 4 : Aire géographique</p>
      <p>
        La vente en ligne des produits et services présentés dans le site est
        réservée aux acheteurs qui résident au MAROC.
      </p>
      <p>Section 5 : Commandes</p>
      <p>
        5.1 L’acheteur, qui souhaite acheter un produit doit obligatoirement :
      </p>
      <p>
        – remplir la fiche d’identification sur laquelle il indiquera toutes les
        coordonnées demandées ou donner son numéro de client s’il en a un
      </p>
      <p>– valider sa commande après l’avoir vérifiée</p>
      <p>– effectuer le paiement dans les conditions prévues</p>
      <p>– confirmer sa commande et son règlement.</p>
      <p>
        La confirmation de la commande entraîne acceptation des présentes
        conditions de vente, la reconnaissance d’en avoir parfaite connaissance
        et la renonciation à se prévaloir de ses propres conditions d’achat ou
        d’autres conditions. L’ensemble des données fournies et la confirmation
        enregistrée vaudront preuve de la transaction.
      </p>
      <p>
        5.2 Lorsque vous passez une commande sur le Site internet,
        www.bewellmarket.ma, nous pouvons vous demander de fournir des
        informations personnelles (nom, un numéro de téléphone, adresse de
        livraison…)
      </p>
      <p>
        5.3 Assurez-vous que les données fournies sont exactes et complètes au
        moment du passage de commande.
      </p>
      <p>
        5.4 Si la livraison de produits n’est plus disponible ou n’est pas
        suffisante, nous vous en tiendrons informés par un appel téléphonique ou
        par message.
      </p>
      <p>
        5.5 Commandez en ligne de 7h à minuit ou par téléphone de 8h30 à 18h. La
        livraison s’effectue J+1 de la commande de 9h à 17h.
      </p>
      <p>Section 6 : Prix et paiements</p>
      <p>
        6.1 Les prix de nos produits sont indiqués en Dirham marocain toutes
        taxes comprises (TVA et autres taxes applicables au jour de la
        commande), sauf indication contraire.
      </p>
      <p>
        6.2 Toutes les commandes quelle que soit leur origine sont payables en
        dirham marocain.
      </p>
      <p>
        6.3 Tout contrat pour la fourniture de livraison de produits via ce Site
        internet se fait entre vous et BEWELL COMMUNICATION à travers la
        plateforme www.bewellmarket.ma.
      </p>
      <p>
        6.4 BEWELL COMMUNICATION se réserve le droit de modifier ses prix à tout
        moment, également le droit de modifier des Produits disponibles à la
        vente sur le Site internet www.bewellmarket.ma
      </p>
      <p>
        6.5 Le produit est facturé sur la base du tarif en vigueur au moment de
        la validation de la commande.
      </p>
      <p>
        6.6 Les produits demeurent la propriété de BEWELL COMMUNICATION jusqu'au
        paiement complet du prix.
      </p>
      <p>
        6.7. Tous les coûts de livraison affichés par notre site sur internet
        sont exacts au moment de la mise en ligne. Cependant, nous nous
        réservons le droit de les modifier avant toute commande.
      </p>
      <p>
        6.8. Le prix total pour la livraison, et les produits commandés seront
        affichés sur le site internet au moment de passer votre commande. Le
        paiement doit être effectué dans son intégralité pour tous les Produits
        fournis
      </p>
      <p>6.9 Le paiement se fait à la livraison en espèces.</p>
      <p>Section 7 : Livraison</p>
      <p>
        7.1. Les plages de livraison au moment de la livraison sont considérées
        de manière approximative (45 minutes) et peuvent varier selon les flux
        des commandes. Les produits sont livrés à l’adresse saisie lors du
        passage de la commande.
      </p>
      <p>
        7.2. Si les produits ne sont pas livrés dans le temps imparti, merci de
        contacter BEWELL COMMUNICATION. Vous pouvez également nous contacter par
        téléphone, et nous ferons tout notre possible pour que vous soyez livrés
        le plus rapidement possible.
      </p>
      <p>
        7.3. Tous les risques liés aux produits et à la livraison vous seront
        transférés au moment de la livraison.
      </p>
      <p>Section 8 : Annulation</p>
      <p>
        8.1 Vous n’avez pas le droit d'annuler une commande après que la
        commande devienne une « commande lancée ».
      </p>
      <p>
        8.2 Tout règlement effectué avant l'annulation d'une commande par BEWELL
        COMMUNICATION n’est pas remboursé.
      </p>
      <p>
        8.3 Chaque commande annulée après être devenue une Commande lancée vous
        est facturée.
      </p>
      <p>Section 9 : Information</p>
      <p>
        9.1. En acceptant les présentes conditions générales, vous manifestez
        votre consentement à ce que les informations recueillies sur le site
        www.bewellmarket.ma fassent l'objet d'un traitement destiné à la
        commande des produits et à la livraison.
      </p>
      <p>
        9.2. En nous fournissant les informations nécessaires à la livraison des
        Produits commandés sur le Site, vous acceptez de nous donner des
        informations complètes et exactes.
      </p>
      <p>
        9.3. Merci de nous contacter si vous souhaitez recevoir des informations
        aux numéros suivants : 0 702 433 192.
      </p>
      <p>Section 10: Responsabilité</p>
      <p>
        Le vendeur, dans le processus de vente en ligne, n’est tenu que par une
        obligation de moyens, sa responsabilité ne pourra être engagée pour un
        dommage résultant de l’utilisation du réseau Internet tel que perte de
        données, intrusion, virus, rupture du service, ou autres problèmes
        involontaires.
      </p>
      <p>Section 11: Propriété intellectuelle</p>
      <p>
        11.1 Tous les éléments du site www.bewellmarket.ma sont et restent la
        propriété intellectuelle et exclusive de BEWELL COMMUNICATION.
      </p>
      <p>
        11.2 Personne n’est autorisé à reproduire, exploiter, rediffuser, ou
        utiliser à quelque titre que ce soit, même partiellement, des éléments
        du site qu’ils soient logiciels, visuels ou sonores, sans autorisation
        écrite de BEWELL COMMUNICATION.
      </p>
      <p>Section 12: Données à caractère personnel</p>
      <p>
        Conformément à la loi relative à l’informatique, aux fichiers, les
        informations à caractère nominatif relatives aux acheteurs pourront
        faire l’objet d’un traitement automatisé.
      </p>
      <p>
        BEWELL COMMUNICATION se réserve le droit de collecter des informations
        sur les acheteurs y compris en utilisant des cookies, et, s’il le
        souhaite, de transmettre à des partenaires commerciaux les informations
        collectées.
      </p>
      <p>
        Les acheteurs peuvent s’opposer à la divulgation de leurs coordonnées en
        le signalant à BEWELL COMMUNICATION. De même, les utilisateurs disposent
        d’un droit d’accès et de rectification des données les concernant,
        conformément à la loi n° 09-08.
      </p>
      <p>Section 13: Archivage - Preuve</p>
      <p>
        BEWELL COMMUNICATION archivera les bons de commandes et les factures sur
        un support fiable et durable constituant une copie fidèle.
      </p>
      <p>
        Les registres informatisés de BEWELL COMMUNICATION seront considérés par
        les parties comme preuve des communications, commandes, paiements et
        transactions intervenus entre les parties.
      </p>
    </Container>
  );
};

export default TermsOfUseScreen;
