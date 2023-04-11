import { createContext, useReducer } from "react";
import { postReducer } from '../reducers/postReducer'
import axios from "axios";
import { POST_LOADED_FAIL, POST_LOADED_SUCCESS, apiUrl } from "../reducers/api";



export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postLoading: true
    })

    //GET all post
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if (response.data.success) {
                dispatch({
                    type: POST_LOADED_SUCCESS,
                    payload: response.data.posts
                })

            }
        } catch (error) {
            dispatch({ type: POST_LOADED_FAIL })
        }
    }

    //Post Context data
    const postContextData = { postState, getPosts }

    return (
        <PostContext.Provider value={postContextData} >
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;