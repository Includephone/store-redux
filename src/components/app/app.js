import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Cart, ItemPage} from '../pages';
import Header from '../header';
import './app.css';

export default class App extends Component{
    render(){
        return(
           <main className="container">
               <Header/>
               <Switch>
                   <Route path="/cart" component={Cart} exact/>
                   <Route path="/item/:id" component={ItemPage}/>
                   <Route path="/" component={Home} exact/>
               </Switch>
           </main>
        )
    }
}