import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import StorePicker from './storepicker';
import App from '../App';
import NotFound from './notfound';

const Router=()=>(
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={StorePicker}></Route>
           <Route path='/store/:id' component={App}></Route>
           <Route component={NotFound}></Route>
       </Switch>
       </BrowserRouter>
)

export default Router;