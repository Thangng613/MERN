import React, { useContext } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import Spinner from '../cors/Spinner'

const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    let body;

    if (authLoading) {
        body = (
            <div>
                <Spinner />
            </div>
        )
    }
    else if (isAuthenticated) {
        return <Navigate to='/dashboard' />
    }
    else {
        body = (

            <>
                {
                    authRoute === 'login' && <Login />
                }
                {
                    authRoute === 'register' && <Register />
                }
            </>

        )
    }


    return (
        <div >
            {body}
        </div>
    )
}

export default Auth