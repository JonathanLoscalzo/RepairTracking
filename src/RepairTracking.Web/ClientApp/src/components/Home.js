import React from 'react';
import { connect } from 'react-redux';
import { CardDeck, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, FormGroup, Label, Input } from 'reactstrap'
import './Cards.css';


const Home = props => (
    // <div id="page-wrapper">
    //     <div class="container-fluid">
    //         <div class="row">
    //             <div class="col-lg-12">
    //                 <h1 class="page-header">Bienvenido!</h1>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div id="wrapper">
        <div className="wrapper-header">
            <div className="col-lg">
                <Container>
                    
                </Container>
                <Container>
                    <CardDeck className="w-75">
                            <Card>
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                    </CardDeck>
                </Container>

                
            </div>
        </div>
        <div className="wrapper-body">
            <div >
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Home);
