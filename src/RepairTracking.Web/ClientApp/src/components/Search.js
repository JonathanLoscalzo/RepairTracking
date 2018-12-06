import React, { Component } from 'react'
import { CardDeck, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return (
      <div>
      <CardDeck className="w-75">
                            <div className="card bg-white border-info cardCustom p-0">
                                <div className="card-header font-weight-bold">Buscar Reparación</div>
                                <CardBody className="text-dark">
                                    <FormGroup>
                                        <Label for="exampleEmail">Código</Label>
                                        <Input type="text" name="email" id="exampleEmail" placeholder="Ej: MM1" />
                                    </FormGroup>
                                    <Button color="info">Buscar</Button>
                                </CardBody>
                            </div>
                            <Card>
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                </CardBody>
                            </Card>
                    </CardDeck>
      </div>
    )
  }
}