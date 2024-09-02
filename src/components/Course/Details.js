import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Col, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CourseInfo from './CourseInfo';
import Tags from './Tags';
import ContentSource from './ContentSource';

const Detail = ({info}) =>{
    return(
        <div className='scrollable'>
        <Container>
                <Row>
                  <Col lg={8}>
                    <h6 className='courseTitle'> {info[0].title}</h6>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Courses</Breadcrumb.Item>
                    </Breadcrumb>
                    <ContentSource source={info[0]} details={info[0].description}/>
                  </Col>
                  <Col lg={4}>
                    <Button className='mainBtn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>Start Now 
                    </Button>
                    <p className='section-head'> At a Glance</p>
                    <CourseInfo detail={info[0].info}/>
                    <p className='section-head'> Tags</p>
                    <Tags tag={info[0].tags}/>
                  </Col>
                </Row>
              </Container>
              </div>
    )
};

export default Detail