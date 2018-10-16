import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify'
import Clients from './modules/clients/container/Clients';
import ClientEdit from './modules/clients/container/ClientEdit';

export default () => (
  <div>
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/client' component={Clients} />
      <Route path='/client/edit/:id' component={ClientEdit} />
      {/* <Route path='/counter' component={Counter} /> */}
      {/* <Route path='/fetchdata/:startDateIndex?' component={FetchData} /> */}
    </Layout>
    <ToastContainer autoClose={2000} />
  </div>
);
