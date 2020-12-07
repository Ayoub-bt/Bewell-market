import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { listProductDetails, deleteProduct } from "../actions/productActions";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { ShoppingCart } from "@material-ui/icons";
import { LinkContainer } from "react-router-bootstrap";
import BienfaitsDialog from "components/BienfaitsDialog";

const SingleProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const deleteHandler = (id) => {
    if (window.confirm("Êtes Vous Sur De Vouloir Supprimer?")) {
      dispatch(deleteProduct(id));
      history.push(`/admin/productlist`);
    }
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/products">
        <KeyboardArrowLeftIcon /> &nbsp;Retour
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Meta title={product.name} />
          <Row>
            <Col md={6}>
              {/* Image */}
              <Image
                src={product.image}
                alt={product.name}
                className="product-img"
                fluid
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                {/* Name */}
                <ListGroup.Item>
                  {product.name === "Haricots blancs cuits à la vapeur" ? (
                    <h3>Haricots blancs (Grini) cuits à la vapeur</h3>
                  ) : (
                    <h3>{product.name}</h3>
                  )}
                </ListGroup.Item>

                {/* Contenance */}
                <ListGroup.Item>
                  <strong style={{ fontWeight: "900", fontSize: "115%" }}>
                    Contenance:
                  </strong>{" "}
                  {product.contenance}g
                </ListGroup.Item>

                {/* Price */}
                <ListGroup.Item>
                  <span style={{ fontSize: "1.7rem", color: "#62ad42" }}>
                    {product.price} dh
                  </span>
                </ListGroup.Item>

                {/* Description */}
                {/* <ListGroup.Item className="descriptionList">
                  <strong>Description</strong>
                  <span>{product.description}</span>
                </ListGroup.Item> */}

                {/* Valeurs */}
                {/* <ListGroup.Item>
                  <Image
                    src={require("../components/images/valeurs.jpg")}
                    alt={product.name}
                  />
                </ListGroup.Item> */}

                {/* CONSEIL DE PRÉPARATION */}
                <ListGroup.Item className="bienfaitsList">
                  {product.name === "Maïs cuit à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Un petit épi de maïs correspond à environ ½ tasse de
                        grains et vaut à peu près 85 calories. C'est un légume
                        coupe-faim qui contient aussi plusieurs nutriments
                      </p>
                      <BienfaitsDialog productName={product.name} />
                    </>
                  ) : product.name === "Betteraves cuites à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Antioxydante, riche en vitamines et minéraux, la
                        betterave est une alliée naturelle pour préserver sa vue
                        et maintenir une bonne santé cardiovasculaire.
                      </p>
                      <BienfaitsDialog productName={product.name} />
                    </>
                  ) : product.name === "Haricots verts cuits à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Allié incontournable de votre confort alimentaire, le
                        haricot a un fort pouvoir de satiété. Il vous apporte en
                        plus fibres, vitamines et oligoéléments.
                      </p>
                      <BienfaitsDialog productName={product.name} />
                    </>
                  ) : product.name === "Cardon cuit à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Le cardon a une saveur proche à la fois de l’artichaut,
                        du salsifi et du céleri et se cuisine au jus, ou bien
                        avec du beurre ou de la crème, en gratin avec de la
                        béchamel, en soupe. Son goût recherché s’allie notamment
                        à de multiples bienfaits pour la santé
                      </p>
                      <BienfaitsDialog productName={product.name} />
                    </>
                  ) : product.name === "Coing cuit à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Souvent dégusté en compote ou en gelée, ou pour
                        accompagner des plats sucrés-salés, le coing contient
                        assez peu de glucides.
                      </p>
                      <BienfaitsDialog productName={product.name} />
                    </>
                  ) : product.name === "Soupe cuite à la vapeur" ? (
                    <>
                      <strong>Bienfaits pour la santé</strong>
                      <p>
                        Au cœur de l’hiver, quoi de mieux qu’une bonne soupe
                        pour se réchauffer ? Les bienfaits de la soupe ne
                        résident pas que dans son pouvoir réchauffant, mais avec
                        de bons légumes de saison, il est possible de faire de
                        véritables potions magiques...
                        <BienfaitsDialog productName={product.name} />
                      </p>
                    </>
                  ) : (
                    <BienfaitsDialog productName={product.name} />
                  )}
                </ListGroup.Item>

                {/* CONSEIL DE PRÉPARATION */}
                {/* <ListGroup.Item className="conseilPrepaList">
                  <strong>Conseils de préparation</strong>{" "}
                  <ul>
                    <li>A réchauffer ou à déguster tel quel</li>
                    <li>Badigeonnez avec du beurre, salé poivré puis poêler</li>
                    <li>
                      Beurré, salé poivré puis grillé au four ou au barbecue
                    </li>
                  </ul>
                </ListGroup.Item> */}
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Disponibilité:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <span style={{ color: "green" }}>En Stock</span>
                        ) : (
                          <span style={{ color: "red" }}>Stock épuisé</span>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col style={{ alignSelf: "center" }}>Quantité</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block btn-bewell2 mt-0"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Ajouter au panier <ShoppingCart />
                    </Button>
                  </ListGroup.Item>
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <ListGroup.Item>
                        <LinkContainer
                          to={`/admin/product/${product._id}/edit`}
                        >
                          <Button className="btn-block btn-info" type="button">
                            Modifier
                          </Button>
                        </LinkContainer>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="btn-block btn-danger"
                          type="button"
                          onClick={() => deleteHandler(product._id)}
                        >
                          Supprimer
                        </Button>
                      </ListGroup.Item>
                    </>
                  )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingleProductScreen;
