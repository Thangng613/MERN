import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <Link to={'/about'}>About</Link>
        </div>
    )
}

export default Dashboard