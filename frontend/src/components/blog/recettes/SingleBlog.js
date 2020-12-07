import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Jumbotron } from "react-bootstrap";
import BlogSectionSmall from "../../home/BlogSectionSmall";
import Message from "../../Message";
import Loader from "../../Loader";
import Meta from "../../Meta";
import { listPostDetails, deletePost } from "../../../actions/blogActions";

import "../../home/style.css";
import { LinkContainer } from "react-router-bootstrap";

const SingleBlog = ({ history, match }) => {
  const dispatch = useDispatch();

  const postId = match.params.id;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
  }, [dispatch, match]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Êtes Vous Sur De Vouloir Supprimer?")) {
      dispatch(deletePost(id));
      history.push("/admin/bloglist");
    }
  };

  return (
    <>
      <Jumbotron className="p-0" fluid>
        <div
          className="blogJumbotron lg-p-top"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
      </Jumbotron>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <Meta title={post.title} />
            {userInfo && userInfo.isAdmin && (
              <p className="text-center">
                <LinkContainer to={`/admin/blog/${post._id}/edit`}>
                  <Button className="mr-3 btn-info" type="button">
                    Modifier
                  </Button>
                </LinkContainer>
                <Button
                  type="button"
                  className="btn-danger"
                  onClick={() => deleteHandler(post._id)}
                >
                  Supprimer
                </Button>
              </p>
            )}
            <h2 className="pb-4 text-center">{post.title}</h2>
            <h6 style={{ display: "inline-block", marginBottom: "30px" }}>
              Pour : {post.pour}
            </h6>
            <h5>Ingrédients :</h5>
            <ul style={{ lineHeight: 3 }}>
              {post.list1 && <li>{post.list1}</li>}
              {post.list2 && <li>{post.list2}</li>}
              {post.list3 && <li>{post.list3}</li>}
              {post.list4 && <li>{post.list4}</li>}
              {post.list5 && <li>{post.list5}</li>}
              {post.list6 && <li>{post.list6}</li>}
              {post.list7 && <li>{post.list7}</li>}
              {post.list8 && <li>{post.list8}</li>}
              {post.list9 && <li>{post.list9}</li>}
              {post.list10 && <li>{post.list10}</li>}
              {post.list11 && <li>{post.list11}</li>}
              {post.list12 && <li>{post.list12}</li>}
              {post.list13 && <li>{post.list13}</li>}
              {post.list14 && <li>{post.list14}</li>}
              {post.list15 && <li>{post.list15}</li>}
            </ul>
            <h5>Instructions :</h5>
            <ul style={{ lineHeight: 3 }}>
              {post.instr1 && <li>{post.instr1}</li>}
              {post.instr2 && <li>{post.instr2}</li>}
              {post.instr3 && <li>{post.instr3}</li>}
              {post.instr4 && <li>{post.instr4}</li>}
              {post.instr5 && <li>{post.instr5}</li>}
              {post.instr6 && <li>{post.instr6}</li>}
              {post.instr7 && <li>{post.instr7}</li>}
              {post.instr8 && <li>{post.instr8}</li>}
              {post.instr9 && <li>{post.instr9}</li>}
              {post.instr10 && <li>{post.instr10}</li>}
              {post.instr11 && <li>{post.instr11}</li>}
              {post.instr12 && <li>{post.instr12}</li>}
              {post.instr13 && <li>{post.instr13}</li>}
              {post.instr14 && <li>{post.instr14}</li>}
              {post.instr15 && <li>{post.instr15}</li>}
            </ul>
            <p className="mt-4">Bonne réalisation et bonne dégustation.</p>
          </Container>
        </>
      )}
      <h3 className="text-center lg-p-top3 pb-5">Plus de recettes</h3>
      <BlogSectionSmall />
    </>
  );
};

export default SingleBlog;
