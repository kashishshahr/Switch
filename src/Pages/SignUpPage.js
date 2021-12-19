import { Col, Form, Row } from "react-bootstrap";
import CustButton from "../MyComponents/CustButton/CustButton";
import "./SignUp.css";
import undrawReg from "../assets/svg/register.svg";
import CustInput from "../MyComponents/CustInput/CustInput";
import DatePicker from "react-date-picker";
import { useState } from "react";
const SignUpPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="u-clearfix u-section-1" id="sec-4b2d">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-text u-text-1">Create Account</h2>
        <Row className="text-center ">
          <Col md="6">
            <Form>
              <CustInput
                label={"Email Address"}
                placeholder={"Enter Your Email Address"}
                typeInput={"email"}
              />
              <CustInput
                label={"Name"}
                placeholder={"Enter Your Email Address"}
                typeInput={"email"}
              />
              <DatePicker onChange={onChange} value={value} />
              <Form.Select aria-label="Gender">
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Select>
              <Form.Select aria-label="Gender">
                <option>Country</option>
                <option value="Male">India</option>
                <option value="Female">Canda</option>
                <option value="Others">China</option>
              </Form.Select>
              <CustInput
                label={"Food Preference"}
                placeholder={"Enter Your Food Preference"}
                typeInput={"email"}
              />
              
              <CustInput xs={1} label={"Height"} typeInput={"number"} />
              <CustInput md={2} label={"Weight"} typeInput={"number"} />

              <CustInput label={"Password"} typeInput={"password"} />
              <CustButton val="Sign Up" />
            </Form>
          </Col>
          <Col md="6">
            <img src={undrawReg} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SignUpPage;
