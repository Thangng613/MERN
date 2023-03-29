import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const authContext = useContext(AuthContext)

    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const { username, password } = loginForm

    const onChangeLoginForm = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

    const login = async e => {
        e.preventDefault()
        try {
            const loginData = await authContext.loginUser(loginForm)
            console.log(loginData);
            if (loginData.success) {
                navigate('/dashboard')
            }

        } catch (error) {

            console.log(error);
        }

    }

    return (
        <>
            <Form className='my-4' onSubmit={login}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder="Username"
                        name='username'
                        required
                        value={username}
                        onChange={onChangeLoginForm}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder="Password"
                        name='password'
                        required
                        value={password}
                        onChange={onChangeLoginForm}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant='success' type='submit' >Login</Button>
            </Form>
            <p>
                Don't you have an account?

                <Link to='/register'>
                    <Button variant='info' size='sm' className='ml-2 '>Register</Button>
                </Link>


            </p>
        </>
    )
}

export default Login