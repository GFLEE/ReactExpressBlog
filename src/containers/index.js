    
import React, { Component, ProTypes } from 'react';
import PureRenderMixiin from 'react-addons-pure-render-mixin';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Front from './Front';
import Admin from './Admin';
import NotFound from './NotFound';
import { Loading } from '../components/Loading';
import { notification } from 'antd';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { actions } from '../reducers/globalStateReducer'


  
ReactDOM.render(

    <Router>
        <div> 
            <Switch>
                <Route path='/404' component={NotFound}/>
                <Route path='/admin' component={Admin}/>              
                <Route component={Front} />
            </Switch>
        </div>
    </Router>

    , document.getElementById('root')

);
