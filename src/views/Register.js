import React from "react";
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

const Register = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center my-auto"
      style={{height:"100vh"}}
    >
      <Card color="secondary" outline style={{ width: "28rem" }}>
        <CardBody>
          <CardTitle tag="h5">Register</CardTitle>
          <hr />
          <Form>
            <FormGroup>
              <Label>Firstname</Label>
              <Input type="text" placeholder="john" />
            </FormGroup>
            <FormGroup>
              <Label>Lastname</Label>
              <Input type="text" placeholder="deo" />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input type="text" placeholder="john deo" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="emal" placeholder="john@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="********" />
            </FormGroup>
            <FormGroup className="d-flex align-items-center justify-content-between">
              <Button type="button" color="primary" outline>
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

export default Register;
