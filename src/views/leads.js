import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import Header from "../components/Header";
import Form from "../components/leads/Form";
import List from "../components/leads/List";

const Leads = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col md={4}>
            <Form />
          </Col>
          <Col md={8}>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default Leads;
