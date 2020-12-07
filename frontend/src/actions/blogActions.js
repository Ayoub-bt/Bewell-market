import axios from "axios";

import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
} from "../constants/blogConstants";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/blog`);

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/blog/${id}`);

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/blog/${id}`, config);

    dispatch({
      type: BLOG_DELETE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: BLOG_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createPost = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/blog`, {}, config);

    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_CREATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/blog/${post._id}`, post, config);

    dispatch({
      type: BLOG_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
