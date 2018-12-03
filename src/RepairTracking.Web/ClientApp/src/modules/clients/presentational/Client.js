import React from 'react';
import './styles/view.css';
import { CardHeader, Table } from 'reactstrap';
import { Nav, NavItem, NavLink, Button, Row, Col, TabContent, TabPane} from 'reactstrap';
import { Body, Header, Wrapper } from '../../common/page'
import ClientDetails from './Details/ClientDetails';
import ClientRepairs from './Details/ClientRepairs';

class Client extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render(){

    
    const { client } = this.props;
    return (
        <Wrapper>
            <Header title='Detalles del cliente' />
            <Body>
            <div>
                <Nav tabs>
                <NavItem>
                    <NavLink
                    className={this.state.activeTab === '1' ? 'active' : null}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Detalles
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={this.state.activeTab === '2' ? 'active' : null}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Reparaciones
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <ClientDetails {...this.props}/>
                </TabPane>
                <TabPane tabId="2">
                    <ClientRepairs {...this.props}/>
                </TabPane>
                </TabContent>
            </div>
            </Body>
        </Wrapper>
    )
}
}

export default Client;
