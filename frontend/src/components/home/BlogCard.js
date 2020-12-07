import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ChevronRight from "@material-ui/icons/ChevronRight";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "1rem",
  },
  media: {
    height: "300px",
    backgroundSize: "cover",
    paddingTop: "2rem", // 16:9
  },
});

const BlogCard = (props) => {
  const { classes, image, title, pour, postId } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/blog/${postId}`}>
          <CardMedia className={classes.media} image={image} title={title} />
        </Link>
        <CardContent>
          <Typography gutterBottom align="center" variant="h6" component="h2">
            <Link to={`/blog/${postId}`}>{title}</Link>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="ul">
            <li>
              <strong style={{ fontWeight: "900" }}>Pour:</strong> {pour}
            </li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="BlogPostBtn">
        <Link to={`/blog/${postId}`}>
          <Button size="small" align="center" color="primary">
            Voir maintenant <ChevronRight />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pour: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(BlogCard);
