import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <Container className='footer__section my-5'>
        <Row>
            <Col md="3">
                <img src='https://moonlightedu.com.np/uploads/company-profile/80_1679988352.png' alt='logo' />
                <p className=''>
                Moonlight Education Consultancy is one of the leading educational consultants, acknowledge for providing best guidance and counselling to the students.
                </p>
            </Col>
            <Col md="3">
                <h5>Navigation</h5>
                <ul>
                    <li><ArrowForwardIosIcon /> Home</li>
                    <li><ArrowForwardIosIcon /> About Us</li>
                    <li><ArrowForwardIosIcon />Study Abroad </li>
                    <li><ArrowForwardIosIcon /> Gallery</li>
                    <li><ArrowForwardIosIcon /> Contact us</li>
                </ul>
            </Col>
            <Col md="3">
                <h5>Abroad</h5>
                <ul>
                    <li><ArrowForwardIosIcon /> Home</li>
                    <li><ArrowForwardIosIcon /> About Us</li>
                    <li><ArrowForwardIosIcon />Study Abroad </li>
                    <li><ArrowForwardIosIcon /> Gallery</li>
                    <li><ArrowForwardIosIcon /> Contact us</li>
                </ul>
            </Col>
            <Col md="3">
                <h5>Contact Us</h5>
                <ul>
                    <li><ArrowForwardIosIcon /> Home</li>
                    <li><ArrowForwardIosIcon /> About Us</li>
                    <li><ArrowForwardIosIcon />Study Abroad </li>
                    <li><ArrowForwardIosIcon /> Gallery</li>
                    <li><ArrowForwardIosIcon /> Contact us</li>
                </ul>
            </Col>
        </Row>

        <Row className='mt-5'>
            <Col md="6">
                <h5>2023 © All rights reserved | <strong>DIPAK KUMAL</strong></h5>
            </Col>
            <Col md="6">
                <ul className='icon'>
                    <li><FacebookIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><FacebookIcon /></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer