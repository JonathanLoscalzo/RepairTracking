import React from 'react';
import {
    Card, Row, 
    CardBody,
    CardHeader,
    Container
} from 'reactstrap'

export default (props) => (
    <div className="wrapper-body" >
        <Container fluid>
            <Row>
                {props.title && <CardHeader className="text-white bg-secondary">{props.title}</CardHeader>}
                <CardBody className="mx-3 my-3">
                    {props.children}
                </CardBody>
            </Row>
        </Container>
    </div>
)