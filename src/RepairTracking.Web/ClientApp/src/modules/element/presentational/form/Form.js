import React, { Fragment, Component } from 'react'
import { Body, Wrapper, Header } from '../../../common/page'
import CreatePage1 from './CreatePage1';
import CreatePage2 from './CreatePage2';
import CreatePage3 from './CreatePage3';

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
                { currentPage === 1 && <CreatePage1 {...stateAndDispatchs} onSubmit={() => this.nextPage()} previousPage={() => this.previousPage()} currentPage={currentPage}/> }
                { currentPage === 2 && <CreatePage2 {...stateAndDispatchs} onSubmit={() => this.nextPage()} previousPage={() => this.previousPage()} /> }
                { currentPage === 3 && <CreatePage3 {...stateAndDispatchs} onSubmit={onSubmit}  previousPage={() => this.previousPage()} /> }
            </Body>
        </Wrapper>
    )
  }
}