import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from '../../cors/Spinner'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = () => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading) {
        return <Spinner />
    }
    return (
        isAuthenticated ? <Outlet /> : (<Navigate to='/login' />)
    )
}

export default ProtectedRoute