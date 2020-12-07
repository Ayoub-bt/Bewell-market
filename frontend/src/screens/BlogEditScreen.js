import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormGroupBlog from "../components/FormGroupBlog";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listPostDetails, updatePost } from "../actions/blogActions";
import { BLOG_UPDATE_RESET } from "../constants/blogConstants";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const BlogEditScreen = ({ match, history }) => {
  const postId = match.params.id;

  const [title, setTitle] = useState("");
  const [pour, setPour] = useState("");
  const [image, setImage] = useState("");
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [list3, setList3] = useState("");
  const [list4, setList4] = useState("");
  const [list5, setList5] = useState("");
  const [list6, setList6] = useState("");
  const [list7, setList7] = useState("");
  const [list8, setList8] = useState("");
  const [list9, setList9] = useState("");
  const [list10, setList10] = useState("");
  const [list11, setList11] = useState("");
  const [list12, setList12] = useState("");
  const [list13, setList13] = useState("");
  const [list14, setList14] = useState("");
  const [list15, setList15] = useState("");
  const [instr1, setInstr1] = useState("");
  const [instr2, setInstr2] = useState("");
  const [instr3, setInstr3] = useState("");
  const [instr4, setInstr4] = useState("");
  const [instr5, setInstr5] = useState("");
  const [instr6, setInstr6] = useState("");
  const [instr7, setInstr7] = useState("");
  const [instr8, setInstr8] = useState("");
  const [instr9, setInstr9] = useState("");
  const [instr10, setInstr10] = useState("");
  const [instr11, setInstr11] = useState("");
  const [instr12, setInstr12] = useState("");
  const [instr13, setInstr13] = useState("");
  const [instr14, setInstr14] = useState("");
  const [instr15, setInstr15] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  const postUpdate = useSelector((state) => state.postUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = postUpdate;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET });
      history.push("/admin/bloglist");
    } else {
      if (!post.title || post._id !== postId) {
        dispatch(listPostDetails(postId));
      } else {
        setTitle(post.title);
        setPour(post.pour);
        setImage(post.image);
        setList1(post.list1);
        setList2(post.list2);
        setList3(post.list3);
        setList4(post.list4);
        setList5(post.list5);
        setList6(post.list6);
        setList7(post.list7);
        setList8(post.list8);
        setList9(post.list9);
        setList10(post.list10);
        setList11(post.list11);
        setList12(post.list12);
        setList13(post.list13);
        setList14(post.list14);
        setList15(post.list15);
        setInstr1(post.instr1);
        setInstr2(post.instr2);
        setInstr3(post.instr3);
        setInstr4(post.instr4);
        setInstr5(post.instr5);
        setInstr6(post.instr6);
        setInstr7(post.instr7);
        setInstr8(post.instr8);
        setInstr9(post.instr9);
        setInstr10(post.instr10);
        setInstr11(post.instr11);
        setInstr12(post.instr12);
        setInstr13(post.instr13);
        setInstr14(post.instr14);
        setInstr15(post.instr15);
      }
    }
  }, [dispatch, history, postId, post, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePost({
        _id: postId,
        title,
        pour,
        image,
        list1,
        list2,
        list3,
        list4,
        list5,
        list6,
        list7,
        list8,
        list9,
        list10,
        list11,
        list12,
        list13,
        list14,
        list15,
        instr1,
        instr2,
        instr3,
        instr4,
        instr5,
        instr6,
        instr7,
        instr8,
        instr9,
        instr10,
        instr11,
        instr12,
        instr13,
        instr14,
        instr15,
      })
    );
  };

  return (
    <>
      <Meta title={title} />
      <Link to="/admin/bloglist" className="btn btn-light my-3">
        <ChevronLeftIcon /> Retour
      </Link>
      <Container>
        <h1 className="mb-4 text-center">Ajouter / Modifier Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Row>
              <Col xs={12} md={12}>
                {/* Title */}
                <Form.Group controlId="title">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                {/* Pour */}
                <Form.Group controlId="pour">
                  <Form.Label>Pour (ex: 2 à 3 personnes): </Form.Label>
                  <Form.Control
                    type="text"
                    value={pour}
                    onChange={(e) => setPour(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                {/* Image */}
                <Form.Group controlId="image">
                  <Form.Label>Image: </Form.Label>
                  <Form.Control
                    type="text"
                    value={image === "/images/sample.jpg" ? "" : image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id="image-file"
                    label="Ou choisir une photo"
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <h2>Ingrédients</h2>
                {/* List1 */}
                <FormGroupBlog
                  id="list1"
                  label="ingredient 1"
                  placeholder="Entrez ingrédient..."
                  value={list1}
                  onchange={setList1}
                />

                {/* List2 */}
                <FormGroupBlog
                  id="list2"
                  label="ingredient 2"
                  placeholder="Entrez ingrédient..."
                  value={list2}
                  onchange={setList2}
                />

                {/* List3 */}
                <FormGroupBlog
                  id="list3"
                  label="ingredient 3"
                  placeholder="Entrez ingrédient..."
                  value={list3}
                  onchange={setList3}
                />

                {/* List4 */}
                <FormGroupBlog
                  id="list4"
                  label="ingredient 4"
                  placeholder="Entrez ingrédient..."
                  value={list4}
                  onchange={setList4}
                />

                {/* List5 */}
                <FormGroupBlog
                  id="list5"
                  label="ingredient 5"
                  placeholder="Entrez ingrédient..."
                  value={list5}
                  onchange={setList5}
                />

                {/* List6 */}
                <FormGroupBlog
                  id="list6"
                  label="ingredient 6"
                  placeholder="Entrez ingrédient..."
                  value={list6}
                  onchange={setList6}
                />

                {/* List7 */}
                <FormGroupBlog
                  id="list7"
                  label="ingredient 7"
                  placeholder="Entrez ingrédient..."
                  value={list7}
                  onchange={setList7}
                />

                {/* List8 */}
                <FormGroupBlog
                  id="list8"
                  label="ingredient 8"
                  placeholder="Entrez ingrédient..."
                  value={list8}
                  onchange={setList8}
                />

                {/* List9 */}
                <FormGroupBlog
                  id="list9"
                  label="ingredient 9"
                  placeholder="Entrez ingrédient..."
                  value={list9}
                  onchange={setList9}
                />

                {/* List10 */}
                <FormGroupBlog
                  id="list10"
                  label="ingredient 10"
                  placeholder="Entrez ingrédient..."
                  value={list10}
                  onchange={setList10}
                />
              </Col>

              <Col xs={12} md={6}>
                <h2>Instructions</h2>
                {/* Instr1 */}
                <FormGroupBlog
                  id="instr1"
                  label="instruction 1"
                  placeholder="Entrez instruction..."
                  value={instr1}
                  onchange={setInstr1}
                />

                {/* Instr2 */}
                <FormGroupBlog
                  id="instr2"
                  label="instruction 2"
                  placeholder="Entrez instruction..."
                  value={instr2}
                  onchange={setInstr2}
                />

                {/* Instr3 */}
                <FormGroupBlog
                  id="instr3"
                  label="instruction 3"
                  placeholder="Entrez instruction..."
                  value={instr3}
                  onchange={setInstr3}
                />

                {/* Instr4 */}
                <FormGroupBlog
                  id="instr4"
                  label="instruction 4"
                  placeholder="Entrez instruction..."
                  value={instr4}
                  onchange={setInstr4}
                />

                {/* Instr5 */}
                <FormGroupBlog
                  id="instr5"
                  label="instruction 5"
                  placeholder="Entrez instruction..."
                  value={instr5}
                  onchange={setInstr5}
                />

                {/* Instr6 */}
                <FormGroupBlog
                  id="instr6"
                  label="instruction 6"
                  placeholder="Entrez instruction..."
                  value={instr6}
                  onchange={setInstr6}
                />

                {/* Instr7 */}
                <FormGroupBlog
                  id="instr7"
                  label="instruction 7"
                  placeholder="Entrez instruction..."
                  value={instr7}
                  onchange={setInstr7}
                />

                {/* Instr8 */}
                <FormGroupBlog
                  id="instr8"
                  label="instruction 8"
                  placeholder="Entrez instruction..."
                  value={instr8}
                  onchange={setInstr8}
                />

                {/* Instr9 */}
                <FormGroupBlog
                  id="instr9"
                  label="instruction 9"
                  placeholder="Entrez instruction..."
                  value={instr9}
                  onchange={setInstr9}
                />

                {/* Instr10 */}
                <FormGroupBlog
                  id="instr10"
                  label="instruction 10"
                  placeholder="Entrez instruction..."
                  value={instr10}
                  onchange={setInstr10}
                />
              </Col>
              <Col xs={12} md={6}>
                <Button type="submit" className="bg-bewell">
                  Ajouter / Modifier
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    </>
  );
};

export default BlogEditScreen;
