import React, { Component } from 'react';
import './style.css';
import { Menu, } from 'antd';
import 'antd/dist/antd.css';



const categories = ['Home','iOS','Python','ReactJs'];




export default class Menus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: categories[0]   //constructor方法中可以初始化state，设置当前选中的为categories中第一个元素。

        }
    }

    handleClick = (e) => {
        this.setState ({
            current: e.key
        })
    }
    render() {
        return ( 
            <Menu
                onClick={this.handleClick}  
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className="menucontainer"
            >
                {
                    categories.map((item,index)=>(
                        <Menu.Item key={item} >
                            {item}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
}
