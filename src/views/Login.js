import React from 'react'
import { Button, Card, CardBody, CardTitle, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import {Link } from "react-router-dom"

const Login = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Card 
            color='secondary'
            outline
            style={{width:"28rem"}}
        >
            <CardBody>
                <CardTitle tag="h5">Login</CardTitle>
                <hr />
                <Form>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type='text' placeholder='john deo' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' placeholder='********' />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center justify-content-between'>
                        <Button type='button' color='primary' outline>Login</Button>
                        <span className='ml-auto'>Need an account? <Link to="/register" className='text-decoration-none'>Signup</Link></span>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    </Container>
  )
}

export default Login