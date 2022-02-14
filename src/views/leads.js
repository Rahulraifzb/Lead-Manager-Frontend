import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
  CardTitle,
  Table,
} from "reactstrap";
import Header from "../components/Header";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";


const Leads = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!",data);
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col md={4}>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Lead</CardTitle>
                <hr />
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      placeholder="John Deo"
                      name="name"
                      value={data?.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="john@gmail.com"
                      name="email"
                      value={data?.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Message</Label>
                    <Input
                      type="text"
                      placeholder="message..."
                      name="message"
                      value={data?.message}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" outline>
                      Save
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md={8}>
            <Table striped>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rahul Rai</td>
                  <td>rahul@gmail.com</td>
                  <td>Hi</td>
                  <td>
                    <span
                      className="text-primary"
                      style={{ marginRight: "18px", cursor: "pointer" }}
                    >
                      <FaRegEdit color="lime" />
                    </span>
                    <span
                      className="text-danger cursor-pointer"
                      style={{ cursor: "pointer" }}
                    >
                      <FiTrash2 />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Satyam Rai</td>
                  <td>satyam@gmail.com</td>
                  <td>Hello</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mansi Rai</td>
                  <td>mansi@gmail.com</td>
                  <td>Whatsapp</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Leads;
