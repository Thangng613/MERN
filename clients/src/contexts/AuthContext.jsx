import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import setAuthToken from '../utils/setAuthToken'
import { authReducer } from '../reducers/authReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './api'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {


    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })


    //Authenticate user
    const loadUser = async () => {
        const token = localStorage[LOCAL_STORAGE_TOKEN_NAME]
        if (token) {
            setAuthToken(token)
        }
        try {
            const res = await axios.get(`${apiUrl}/auth`)
            if (res.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: {
                        isAuthenticated: true,
                        user: res.data.user
                    }
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({
                type: 'SET_AUTH',
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            })
        }
    }
    useEffect(() => {
        loadUser()
    }, [])

    //login
    const loginUser = async userForm => {
        try {
            const respond = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (respond.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    respond.data.accessToken)
            }

            await loadUser()

            return respond.data
        } catch (error) {
            if (error.respond && error.respond.data) {
                return error.respond.data
            }
            else {
                return {
                    success: false,
                    message: error.message
                }
            }
        }
    }

    //Context data
    const authContextData = { loginUser, authState };

    //return provider
    return (
        <AuthContext.Provider value={authContextData} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

