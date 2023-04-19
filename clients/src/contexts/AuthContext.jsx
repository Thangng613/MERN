import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import setAuthToken from "../utils/setAuthToken";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../reducers/api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //Authenticate user
  const loadUser = async () => {
    const token = localStorage[LOCAL_STORAGE_TOKEN_NAME];
    if (token) {
      setAuthToken(token);
    }
    try {
      const res = await axios.get(`${apiUrl}/auth`);
      if (res.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: res.data.user,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  //login
  const loginUser = async (userLoginForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userLoginForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else {
        return {
          success: false,
          message: error.message,
        };
      }
    }
  };

  const registerUser = async (userRegisterForm) => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/register`,
        userRegisterForm
      );

      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }

      await loadUser();

      return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else {
        return {
          success: false,
          message: error.message,
        };
      }
    }
  };

  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
  };

  //Context data
  const authContextData = { loginUser, registerUser, logoutUser, authState };

  //return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
