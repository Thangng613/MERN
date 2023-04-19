import {
  ADD_POST,
  DELETE_POST,
  FIND_POST,
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  UPDATE_POST,
} from "./api";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_LOADED_SUCCESS:
      return {
        ...state,
        posts: payload,
        postLoading: false,
      };
    case POST_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postLoading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case UPDATE_POST:
      const newPosts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
      return {
        ...state,
        posts: newPosts,
      };
    case FIND_POST:
      return {
        ...state,
        post: payload,
      };
    default:
      break;
  }
};
