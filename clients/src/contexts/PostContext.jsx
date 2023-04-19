import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/postReducer";
import axios from "axios";
import {
  ADD_POST,
  FIND_POST,
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  UPDATE_POST,
  apiUrl,
} from "../reducers/api";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    posts: [],
    postLoading: true,
  });
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [post, setPost] = useState({
    title: "",
    url: "",
    description: "",
    status: "TO LEARN",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenUpdatePost, setIsModalOpenUpdatePost] = useState(false);

  //GET all post
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      if (response.data.success) {
        dispatch({
          type: POST_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({ type: POST_LOADED_FAIL });
    }
  };

  //Create Post
  const createPost = async (newPost) => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, newPost);
      if (response.data.success) {
        dispatch({
          type: ADD_POST,
          payload: response.data.post,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Sever Error" };
    }
  };

  //find post when user updating post
  const findPost = (postId) => {
    // const response = await axios.get(`${apiUrl}/posts/${postId}`);
    const post = postState.posts.find((post) => post._id === postId);
    // if (response.data.success) {
    dispatch({ type: FIND_POST, payload: post });
    // }
    // return response.data;
  };
  //Update Post
  const updatePost = async (updatePost, id) => {
    console.log(id);
    const response = await axios.put(`${apiUrl}/posts/${id}`, updatePost);
    try {
      if (response.data.success) {
        dispatch({
          type: UPDATE_POST,
          payload: response.data.post,
        });
        getPosts();
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Sever Error" };
    }
  };

  //Delete Post
  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${id}`);
      if (response.data.success) {
        getPosts();
      }
      return response.data;
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Sever Error" };
    }
  };

  //Post Context data
  const postContextData = {
    postState,
    getPosts,
    createPost,
    showToast,
    deletePost,
    setShowToast,
    updatePost,
    post,
    setPost,
    isModalOpen,
    setIsModalOpen,
    findPost,
    isModalOpenUpdatePost,
    setIsModalOpenUpdatePost,
  };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
