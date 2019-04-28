import React, { Component } from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import Menus from '../../components/Menus/Menus';
import ReactCanvasNest from 'react-canvas-nest';


class Home extends Component {
    render() {
        return (
            <div className="container">
            
                <Header />
                <div className="nav">
                    <Menus />
                </div>
                <div className="main">
                    The ArticleList.........
                </div>
            </div>
        )
    }
};

export default Home;