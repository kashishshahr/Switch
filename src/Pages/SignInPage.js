import { Col, Container, Form, Row } from "react-bootstrap";
import undrawAuth from "../assets/svg/undrawAuth.svg";
import CustButton from "../MyComponents/CustButton/CustButton";

const SignInPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>Sign-In</h4>
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    
           <CustButton val={"Sign In"}/>
          </Form>
        </Col>
        <Col md='6'>
          <img src={undrawAuth} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
