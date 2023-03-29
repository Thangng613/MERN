import React from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = ({ authRoute }) => {




    const body = (
        (
            <>
                {
                    authRoute === 'login' && <Login />
                }
                {
                    authRoute === 'register' && <Register />
                }
            </>
        )
    )
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>LearnIt</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth