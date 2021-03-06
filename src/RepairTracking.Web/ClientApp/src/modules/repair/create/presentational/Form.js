import React, { Fragment, Component } from 'react'
import { Body, Wrapper, Header } from '../../../common/page'
import CreatePage1 from './Wizard/CreatePage1';
import CreatePage2 from './Wizard/CreatePage2';
import CreatePage3 from './Wizard/CreatePage3';
import LastStep from './Wizard/LastStep';
import CardContainer from './Wizard/CardContainer';

export default class Form extends Component {
   constructor(props){
        super(props);
        this.state = {
            currentPage: 1
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
   }

   nextPage(){
       this.setState({
            currentPage: this.state.currentPage + 1
       });
   }
  
   previousPage(){
    this.setState({
         currentPage: this.state.currentPage - 1
    });
   }

  render() {
    const {title, onSubmit, ...stateAndDispatchs} = this.props;
    const { currentPage } = this.state;
    return (
      <Wrapper>
            <Header title={title} />
            <Body >
                { currentPage === 1 && <CardContainer component={CreatePage1} {...stateAndDispatchs} onSubmit={() => this.nextPage()} previousPage={() => this.previousPage()} currentPage={currentPage}/> }
                { currentPage === 2 && <CardContainer component={CreatePage2} {...stateAndDispatchs} onSubmit={() => this.nextPage()} previousPage={() => this.previousPage()} /> }
                { currentPage === 3 && <CardContainer component={CreatePage3} {...stateAndDispatchs} onSubmit={(values) => {onSubmit(values); this.nextPage()}}  previousPage={() => this.previousPage()} /> }
                { currentPage === 4 && <CardContainer component={LastStep} {...stateAndDispatchs} />}    
            </Body>
        </Wrapper>
    )
  }
}
