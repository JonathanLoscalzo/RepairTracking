import React from 'react'
import {Card, Container, CardHeader, CardBody} from 'reactstrap';

const CardContainer = (props) => {
  return (
      <Container style={{width:'800px'}}>
        <Card style={{padding:'0px'}}>
            <CardHeader tag="h3">Alta de reparación</CardHeader>
            <CardBody>
                <props.component {...props}/>
            </CardBody>
        </Card>
      </Container>
  )
}

export default CardContainer;