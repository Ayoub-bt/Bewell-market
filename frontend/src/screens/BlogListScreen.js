import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listPosts, deletePost, createPost } from "../actions/blogActions";

import { BLOG_CREATE_RESET } from "../constants/blogConstants";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const BlogListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const postsList = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsList;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  const postCreate = useSelector((state) => state.postCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    post: createdPost,
  } = postCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/blog/${createdPost._id}/edit`);
    } else {
      dispatch(listPosts(""));
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdPost]);

  const deleteHandler = (id) => {
    if (window.confirm("Êtes Vous Sur De Vouloir Supprimer?")) {
      dispatch(deletePost(id));
    }
  };

  const createPostHandler = () => {
    dispatch(createPost());
  };

  return (
    <>
      <Meta title="Admin | Blog" />
      <Container className="lg-p-top3">
        <Row className="align-items-center">
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <h2>Recettes</h2>
          </Col>
          <Col md={6} className="mb-4" style={{ width: "50%" }}>
            <Button
              className="btn bg-bewell float-right"
              onClick={createPostHandler}
            >
              <AddIcon />
              &nbsp; Nouvelle recette
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm"
            id="ordersTable"
          >
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>IMAGE</th>
                <th>TITRE</th>
                <th>POUR</th>
                <th>INGRÉDIENTS</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  {/* <td>{post._id}</td> */}
                  <td>
                    <img src={post.image} width="100px" alt={post.name} />
                  </td>
                  <td>
                    <Link to={`/blog/${post._id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.pour}</td>
                  <td className="text-left">
                    <p>- {post.list1}</p>
                    <p>- {post.list2}</p>
                    <p>- {post.list3}</p>
                    {post.list4 && <p>- {post.list4}</p>}
                    {post.list5 && <p>- {post.list5}</p>}
                    {post.list6 && <p>- {post.list6}</p>}
                    {post.list7 && <p>- {post.list7}</p>}
                    {post.list8 && <p>- {post.list8}</p>}
                    {post.list9 && <p>- {post.list9}</p>}
                    {post.list10 && <p>- {post.list10}</p>}
                    {post.list11 && <p>- {post.list11}</p>}
                    {post.list12 && <p>- {post.list12}</p>}
                    {post.list13 && <p>- {post.list13}</p>}
                    {post.list14 && <p>- {post.list14}</p>}
                    {post.list15 && <p>- {post.list15}</p>}
                  </td>

                  <td className="text-center">
                    <LinkContainer to={`/admin/blog/${post._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <EditIcon />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(post._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default BlogListScreen;
