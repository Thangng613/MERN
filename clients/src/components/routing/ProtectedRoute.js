import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from '../../core/Spinner'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'


const ProtectedRoute = () => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading) {
        return <Spinner />
    }
    return (
        isAuthenticated ?
            (<>
                <Navbar />
                <Outlet />
            </>)
            : (<Navigate to='/login' />)
    )
}

export default ProtectedRoute