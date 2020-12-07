import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../actions/blogActions";

// Material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// Utils
import BlogCard from "../home/BlogCard";
import calculateSpacing from "../home/calculateSpacing";
import classNames from "classnames";
import Message from "../Message";
import Loader from "../Loader";
import "./blog.css";
import Meta from "components/Meta";

const useStyles = makeStyles((theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
}));

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const Blog = (props, { history }) => {
  const classes = useStyles();
  const { width } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const dispatch = useDispatch();

  const postsList = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsList;

  // eslint-disable-next-line
  const shuffledPosts = shuffleArray(posts);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      <Meta title="Blog | Jarda" />
      <div
        className="lg-p-top3"
        style={{ backgroundColor: "#FFFFFF" }}
        id="blogSection"
      >
        <Typography variant="h4" align="center" className="sectionTitle">
          Blog
        </Typography>
        <div className={classNames("container", classes.containerFix)}>
          <Grid
            container
            spacing={calculateSpacing(width)}
            className={classes.gridContainer}
          >
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                {posts.map((post) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    key={post._id}
                    className={classes.cardWrapper}
                  >
                    <BlogCard
                      postId={post._id}
                      title={post.title}
                      image={post.image}
                      pour={post.pour}
                    />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Blog;
