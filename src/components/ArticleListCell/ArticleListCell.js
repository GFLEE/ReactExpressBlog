import React, { Component } from 'react'
// import {withRouter} from "react-router-dom";

import './style.css'
// import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'


 class ArticleListCell extends Component {

    render() { 
        return(
            <div className="ac_container" onClick={
                () => {
                    this.context.props.history.push(`/detail/${this.props.data._id}`, {id: this.props.data_id});
                    // props.getArticleDetail(props.data_id)
                    // this.props.his
                }
              }
            >
                <div className="content">
                    <div className="title">
                        <h2>{this.props.data.title} + {this.props.tags}</h2>
                    </div>
                    <p className="summary">
                        这里应该有摘要的，因为设计的数据库表表结构的时候忘记了，后面也是懒得加了，感觉太麻烦了，就算了
                    </p>
                    <div>
                        <div className="info">
                            <div className="tag">
                                <img src={require('./calendar.png')} alt="发表日期"/>
                                <div>{this.props.data.time}</div>
                            </div>
                            <div className="tag">
                                <img src={require('./views.png')} alt="阅读数"/>
                                <div>{this.props.data.viewCount}</div>
                            </div>
                            <div className="tag">
                                 <img src={require('./comments.png')} alt="评论数"/>
                                <div>{this.props.data.commentCount}</div>
                            </div>
                        </div>
                        <span className="lastSpan">
                            阅读全文
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

// export default withRouter(ArticleListCell);
export default ArticleListCell;