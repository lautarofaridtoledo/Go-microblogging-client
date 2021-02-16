import React from "react";
import { Container, Row, Col, Buttton } from "react-bootstrap";
import LogoMicroblog from "../../assets/png/Logo.png";
import LogoWhiteMicroblog from "../../assets/png/Logo-White.png";
import "./SignInSignUp.scss";

export default function SignInSignUp () {
    return (
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent/>
                <RightComponent/>
            </Row>
        </Container>
    )
} 

function LeftComponent () {
    return (
        <Col className="signin-signup__Left" xs={6}>
            <img src={LogoMicroblog} alt="Logo" />
            <div>
                <h2>- Sigue lo que te interesa.</h2>
                <h2>- Mantente al dia.</h2>
                <h2>- Unete a la conversacion.</h2>
            </div>
        </Col>
    )
}

function RightComponent () {
    return (
        <Col className="signin-signup__Right" xs={6}>
            <h2>
                RIGHT COMPONENT
            </h2>
        </Col>
    )
}