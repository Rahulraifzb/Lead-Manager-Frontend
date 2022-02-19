import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { register } from "../actions/auth";

const Register = (props) => {
  const [data,setData] = useState({first_name:"",last_name:"",username:"",email:"",password:""})

  const onChange = (e) => {
    setData((prevState) => ({...prevState,[e.target.name]:e.target.value}))
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    props.register(data)
    setData({first_name:"",last_name:"",username:"",email:"",password:""})
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center my-auto"
      style={{height:"100vh"}}
    >
      <Card color="secondary" outline style={{ width: "28rem" }}>
        <CardBody>
          <CardTitle tag="h5">Register</CardTitle>
          <hr />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Firstname</Label>
              <Input 
                type="text"
                name="first_name" 
                placeholder="john"
                value={data?.first_name}
                onChange={onChange} 
              />
            </FormGroup>
            <FormGroup>
              <Label>Lastname</Label>
              <Input
                type="text" 
                name="last_name"
                placeholder="deo"
                value={data?.last_name}
                onChange={onChange} 
              />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input 
                type="text" 
                name="username"
                placeholder="john deo" 
                value={data?.username}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input 
                type="emal" 
                name="email"
                placeholder="john@gmail.com"
                value={data?.email}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input 
                type="password" 
                name="password"
                placeholder="********"
                value={data?.password}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup className="d-flex align-items-center justify-content-between">
              <Button type="submit" color="primary" outline>
                Register
              </Button>
              <span className="ml-auto">Have an account? <Link to="/login" className="text-decoration-none">Signin</Link></span>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default connect(null,{register})(Register);
