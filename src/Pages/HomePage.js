import "./HomePage.css";
import undrawMint from "../assets/images/undraw_mint_tea_7su01.png";

import undrawVisual from "../assets/images/undraw_visual_data_re_mxxo.png";
import undrawArtificial from "../assets/images/undraw_Artificial_intelligence_re_enpp.png";
import undrawBreakFast from "../assets/images/undraw_breakfast_psiw.png";


import { Col, Container, Row } from "react-bootstrap";
import DisplayCard from "../MyComponents/DisplayCard/Card";
import CustButton from "../MyComponents/CustButton/CustButton";
const HomePage = () => {
  let displayCards = [
    <Col md={4}><DisplayCard image={undrawArtificial} title={`Food Image recognizer`} /></Col>,
    <Col md={4}><DisplayCard image={undrawBreakFast} title={`Diet Generator`} /></Col>,
    <Col md={4}><DisplayCard image={undrawVisual} title={`Food Analyzer`} /></Col>
  ];
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={5}>
          <p className="home-text">
            Switch helps you to transform your unhealthy lifestyle into a
            Healthy Lifestyle.
          </p>
          <CustButton val={"Sign Up"} />
        </Col>
        <Col md='6' className="containterOfImage">
          <img src={undrawMint} alt="" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col><h2><strong>Why is it so great?</strong></h2></Col></Row>
      <Row className='text-center'><em>
        The purpose of this project is to maintain the healthy lifestyle of the
        people. The main purpose is to create a healthy diet chart using the
        information entered by the user. Users can also get detailed information
        about the particular dish by uploading its image or searching by its
        name. Moreover, Users are also feasible to make some changes in diet
        charts according to their needs.</em>
      </Row>
      <Row className="text-center">{displayCards}</Row>
    </Container>
  );
};

export default HomePage;
