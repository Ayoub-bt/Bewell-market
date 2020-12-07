import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Cart from "./cart/Cart";
import BlogPost from "./blog/BlogPost";
import ShippingScreen from "./shipping/ShippingScreen";
import SingleBlog from "./blog/SingleBlog";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome, selectCart } = props;
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />

      <PropsRoute
        exact
        path="/cart"
        component={Cart}
        selectBlog={selectCart}
        blogPosts={blogPosts}
      />

      <PropsRoute
        exact
        path="/shipping"
        component={ShippingScreen}
      />

      <PropsRoute
        exact
        path="/singleBlog"
        component={SingleBlog}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectCart: PropTypes.func.isRequired,
};

export default memo(Routing);
