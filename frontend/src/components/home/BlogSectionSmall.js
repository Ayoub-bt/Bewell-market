import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../actions/blogActions";

// Material ui
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ChevronRight, Message } from "@material-ui/icons";

// Utils
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import classNames from "classnames";
import calculateSpacing from "./calculateSpacing";
import Loader from "../Loader";

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

const BlogSectionSmall = (props, { history }) => {
  const classes = useStyles();
  const { width } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const dispatch = useDispatch();

  const postsList = useSelector((state) => state.postsList);
  const { loading, error, posts } = postsList;

  const shuffledPosts = shuffleArray(posts);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div
      className="pt-1"
      style={{ backgroundColor: "#FFFFFF" }}
      id="blogSection"
    >
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
              {shuffledPosts.slice(0, 3).map((post) => (
                <Grid
                  key={post._id}
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  className={classes.cardWrapper}
                  data-aos="zoom-in-up"
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
        <Grid item xs={12} sm={12} lg={12} className="text-center py-5">
          <Link to="/blog">
            Voir plus <ChevronRight />
          </Link>
        </Grid>
      </div>
    </div>
  );
};

export default BlogSectionSmall;
