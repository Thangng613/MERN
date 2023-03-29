import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Form className='my-4'>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder="Username"
                        name='Username'
                        required
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder="Password"
                        name='password'
                        required
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder="Confirm password"
                        name='password'
                        required
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant='success' type='submit' >Register</Button>
            </Form>
            <p>
                You have an account?

                <Link to='/login'>
                    <Button variant='info' size='sm' className='ml-2 '>Login</Button>
                </Link>


            </p>
        </>
    )
}

export default Register