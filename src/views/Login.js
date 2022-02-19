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
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import { connect } from "react-redux";

const MyLogin = (props) => {
  const [data, setData] = useState({ username: "", password: "" });

  const onChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" ---- props data  ---- ", props);
    props.login(data);
    // setData({ username: "", password: "" });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card color="secondary" outline style={{ width: "28rem" }}>
        <CardBody>
          <CardTitle tag="h5">Login</CardTitle>
          <hr />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="john deo"
                name="username"
                value={data?.username}
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
                Login
              </Button>
              <span className="ml-auto">
                Need an account?{" "}
                <Link to="/register" className="text-decoration-none">
                  Signup
                </Link>
              </span>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};



export default connect(null, { login })(MyLogin);
