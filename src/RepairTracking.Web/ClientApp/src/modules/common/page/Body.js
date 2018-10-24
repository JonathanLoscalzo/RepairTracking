import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Container
} from 'reactstrap'

export default (props) => (
    <div className="wrapper-body" >
        <Container>
            <Card>
                {props.title && <CardHeader className="text-white bg-secondary">{props.title}</CardHeader>}
                <CardBody className="mx-3 my-3">
                    {props.children}
                </CardBody>
            </Card>
        </Container>
    </div>
)