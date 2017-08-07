import React from 'react';
import "../css/tabs.less";
import {Link} from 'react-router';

class Tabs extends React.Component{
    constructor(props){
        super(props)
        console.log(this)
    };
    addStyle =(p) => {
    
    
}
    render(){
        return(
            <div style={{height:"30px",lineHeight:"30px"}}>
                <ul className="tabs">
                    <li><Link to="/ones" onClick={this.addStyle('ones')}>首页</Link></li>
                    <li><Link to="/project">产品</Link></li>
                    <li><Link to="/assets">资产</Link></li>
                    <li><Link to="/interaction">互动</Link></li>
                </ul>
            </div>
        )
    };
}

// let a = '',project='';
export {Tabs} ;